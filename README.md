# Sports API 🏃‍♂️

Une application web moderne permettant de découvrir et explorer différents sports, leurs règles, et leurs caractéristiques. Construite avec Next.js 13 et Supabase.

## 🌟 Fonctionnalités

- 🔍 Recherche de sports par nom et région
- 📖 Informations détaillées sur chaque sport
- 🎯 Interface utilisateur intuitive et responsive
- 🔄 Mises à jour en temps réel
- 🌐 API REST complète

## 🛠️ Technologies Utilisées

### Frontend
- Next.js 13 (App Router)
- React
- CSS Modules
- Framer Motion (animations)

### Backend
- Next.js API Routes
- Supabase (Base de données)

### Outils
- ESLint
- Prettier
- Git

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/sports-api.git
cd sports-api
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env.local
```
Remplissez les variables dans `.env.local` avec vos propres clés.

4. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur `http://localhost:3000`.

## 🗄️ Structure du Projet

```
/sports-api
├── /public            # Assets statiques
├── /src
│   ├── /app          # App Router de Next.js
│   ├── /components   # Composants React réutilisables
│   ├── /pages        # Pages de l'application
│   ├── /styles       # Fichiers CSS
│   └── /utils        # Utilitaires et helpers
└── /docs             # Documentation supplémentaire
```

## 📚 Documentation API

### Endpoints

#### GET /api/sports
Récupère la liste de tous les sports.

**Réponse** :
```json
[
  {
    "id": "1",
    "name": "Football",
    "region": "Europe/Amérique du Sud",
    "match_duration": 90,
    "players_count": 22,
    "rules": "...",
    "slug": "football"
  }
]
```

#### GET /api/sports/[slug]
Récupère les détails d'un sport spécifique.

**Paramètres** :
- `slug`: Identifiant unique du sport

**Réponse** :
```json
{
  "id": "1",
  "name": "Football",
  "region": "Europe/Amérique du Sud",
  "match_duration": 90,
  "players_count": 22,
  "rules": "...",
  "slug": "football"
}
```

## 🔐 Sécurité

- Authentification via Supabase
- Protection des routes API
- Validation des données entrantes
- Sanitization des données sortantes

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Auteurs

- **Léo Segalini** - *Développeur principal* - [GitHub](https://github.com/votre-username)

## 🙏 Remerciements

- Supabase pour leur excellente plateforme de base de données
- La communauté Next.js pour leur support
- Tous les contributeurs qui ont participé à ce projet