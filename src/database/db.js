import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { schema, initialData } from './schema';

// Chemin vers la base de données
const dbPath = path.resolve(process.cwd(), 'src/database/sports.db');

// Fonction pour initialiser la base de données
async function initializeDatabase() {
    try {
        // Ouvrir la connexion
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        // Exécuter le schéma SQL
        await db.exec(schema);
        
        // Insérer les données initiales
        await db.exec(initialData);

        console.log('Base de données initialisée avec succès');
        return db;
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données:', error);
        throw error;
    }
}

// Singleton pour la connexion à la base de données
let dbConnection = null;

export async function getDatabase() {
    if (!dbConnection) {
        dbConnection = await initializeDatabase();
    }
    return dbConnection;
}

// Fonction pour fermer la connexion
export async function closeDatabase() {
    if (dbConnection) {
        await dbConnection.close();
        dbConnection = null;
    }
}

// Fonction utilitaire pour les requêtes
export async function query(sql, params = []) {
    const db = await getDatabase();
    try {
        return await db.all(sql, params);
    } catch (error) {
        console.error('Erreur lors de l\'exécution de la requête:', error);
        throw error;
    }
}

// Fonction pour obtenir un sport par son slug
export async function getSportBySlug(slug) {
    const sports = await query('SELECT * FROM sports WHERE slug = ?', [slug]);
    return sports[0]; // Retourne le premier sport trouvé ou undefined
}

// Fonction pour obtenir la liste des sports avec pagination
export async function getSports({ page = 1, limit = 10, search = '', region = '' }) {
    const offset = (page - 1) * limit;
    let sql = 'SELECT * FROM sports';
    const params = [];

    if (search || region) {
        sql += ' WHERE';
        if (search) {
            sql += ' name LIKE ?';
            params.push(`%${search}%`);
        }
        if (region) {
            if (search) sql += ' AND';
            sql += ' region LIKE ?';
            params.push(`%${region}%`);
        }
    }

    sql += ' ORDER BY name ASC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const countSql = sql.replace('SELECT *', 'SELECT COUNT(*) as count').replace(' LIMIT ? OFFSET ?', '');
    const [{ count }] = await query(countSql, params.slice(0, -2));

    const data = await query(sql, params);
    return {
        data,
        pagination: {
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count / limit)
        }
    };
} 