Sports API
Une API REST permettant de rechercher un sport et d'obtenir des informations détaillées telles que ses règles, la région où il est pratiqué, la durée des matchs, et bien plus encore. Ce projet inclut aussi une interface front-end pour afficher les sports disponibles et leurs détails.

Table des matières
Présentation
Technologies utilisées
Installation
Structure du projet
API
Endpoints
Front-end
Exemples de requêtes
Contribuer
Présentation
Ce projet a pour but de faciliter la découverte des sports à travers une API gratuite. L'API offre des informations sur différents sports, telles que leur nom, la région où ils sont pratiqués, la durée des matchs, les règles du jeu, et d'autres détails importants. Une interface front-end est également fournie pour naviguer et afficher ces sports de manière interactive.

Technologies utilisées
Backend :

Next.js 13 (API Routes et Server-Side Rendering)
SQLite (ou autre base de données légère pour stocker les sports et leurs détails)
Fetch API (pour les appels API)
Frontend :

React
Framer Motion (pour les animations)
CSS Modules / Tailwind CSS (pour le style)
Installation
Prérequis
Node.js installé sur votre machine (version 16 ou supérieure recommandée).
npm ou yarn pour la gestion des dépendances.
Étapes d'installation
Clonez ce projet sur votre machine locale :

bash
Copier le code
git clone https://github.com/ton-utilisateur/sports-api.git
cd sports-api
Installez les dépendances :

bash
Copier le code
npm install
Lancez l'application en mode développement :

bash
Copier le code
npm run dev
L'application sera accessible sur http://localhost:3000.

Structure du projet
bash
Copier le code
/sports-api
│
├── /app                    # Page Frontend (React + Next.js)
│   ├── /api                # API Routes de Next.js
│   ├── /sports             # Pages de détails de sport
│       └── /[slug]         # Liste des sports
│
├── /public                 # Fichiers publics (images, logos, etc.)
│
├── /pages                  # Pages Next.js
│   └── /api/sports/index.js
|   └── /api/sports/[slug]  # API Dynamique pour récupérer un sport par slug
│
└── package.json            # Dépendances et scripts
API
L'API offre plusieurs points de terminaison pour récupérer des informations sur les sports.

Endpoints
1. GET /api/sports
Récupère la liste de tous les sports disponibles.

Réponse exemple :

json
Copier le code
[
  {
    "id": "1",
    "name": "Football",
    "region": "Europe/Amérique du Sud",
    "match_duration": 90,
    "score_average": 2.5,
    "is_risky": false,
    "players_count": 22,
    "points_calculation": "1 point par but marqué.",
    "rules": "Le football est joué par deux équipes de 11 joueurs. Chaque équipe essaie de marquer dans le but de l'adversaire. ...",
    "slug": "football",
  },
  ...
]
2. GET /api/sport/[slug]
Récupère les détails d'un sport spécifique par son slug.

Réponse exemple :

json
Copier le code
{
  "id": "1",
  "name": "Football",
  "region": "Europe/Amérique du Sud",
  "match_duration": 90,
  "score_average": 2.5,
  "is_risky": false,
  "players_count": 22,
  "points_calculation": "1 point par but marqué.",
  "rules": "Le football est joué par deux équipes de 11 joueurs. ...",
  "slug": "football"
}
Paramètres :
slug : L'identifiant unique du nom du sport.
Front-end
Le front-end de cette application est une interface utilisateur simple qui permet de naviguer entre les sports et de voir les détails de chaque sport. Il utilise Next.js et React pour rendre les pages dynamiques, ainsi que Framer Motion pour les animations.

Pages principales
Page Liste des sports : Affiche une liste filtrable de sports.

L'utilisateur peut filtrer les sports par nom et région.
En cliquant sur un sport, l'utilisateur accède à une page de détails pour ce sport.
Page Détails d'un sport : Affiche les informations détaillées d'un sport particulier (nom, région, durée des matchs, règles, etc.).

Exemples de requêtes
Liste des sports
bash
Copier le code
GET http://localhost:3000/api/sports
Détails d'un sport (par UUID)
bash
Copier le code
GET http://localhost:3000/api/sports/football
Front-end : Récupérer un sport par son UUID
URL : http://localhost:3000/sports/football

Contribuer
Fork ce dépôt.
Crée une branche pour ta nouvelle fonctionnalité :
bash
Copier le code
git checkout -b feature/nom-de-ta-fonctionnalité
Fais tes changements, puis ajoute-les au staging :
bash
Copier le code
git add .
Commit tes changements :
bash
Copier le code
git commit -m "Ajout de [fonctionnalité]"
Pousse tes changements :
bash
Copier le code
git push origin feature/nom-de-ta-fonctionnalité
Crée une Pull Request.
License
Ce projet est sous licence MIT.