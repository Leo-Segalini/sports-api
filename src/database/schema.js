export const schema = `
-- Création de la table des sports
CREATE TABLE IF NOT EXISTS sports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    region VARCHAR(100) NOT NULL,
    match_duration INTEGER,
    players_count INTEGER,
    rules TEXT,
    description TEXT,
    image_sport VARCHAR(255),
    federation_link VARCHAR(255),
    top_teams_or_players TEXT,
    top_championships TEXT,
    betting_tips TEXT,
    points_calculation TEXT,
    score_average DECIMAL(4,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour optimiser les recherches
CREATE INDEX IF NOT EXISTS idx_sports_slug ON sports(slug);
CREATE INDEX IF NOT EXISTS idx_sports_name ON sports(name);
CREATE INDEX IF NOT EXISTS idx_sports_region ON sports(region);

-- Trigger pour mettre à jour updated_at
CREATE TRIGGER IF NOT EXISTS update_sports_timestamp 
    AFTER UPDATE ON sports
BEGIN
    UPDATE sports SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;
`;

export const initialData = `
-- Données initiales pour les sports
INSERT OR IGNORE INTO sports (name, slug, region, match_duration, players_count, rules, description, federation_link, top_teams_or_players, top_championships, betting_tips, points_calculation, score_average)
VALUES 
    ('Football', 'football', 'Europe/Amérique du Sud', 90, 22, 'Le football se joue entre deux équipes de 11 joueurs. Le but est de marquer plus de buts que l''équipe adverse en faisant pénétrer le ballon dans le but adverse.', 'Le sport le plus populaire au monde, mêlant technique, tactique et esprit d''équipe.', 'https://www.fifa.com', 'Real Madrid, Barcelona, Manchester United, Lionel Messi, Cristiano Ronaldo', 'Ligue des Champions UEFA, Coupe du Monde FIFA, Premier League', 'Analysez les statistiques récentes et la forme des équipes', '1 but = 1 point', 2.5),
    
    ('Basketball', 'basketball', 'Amérique du Nord/Monde', 48, 10, 'Deux équipes de 5 joueurs s''affrontent pour marquer des paniers. Les tirs valent 2 ou 3 points selon la distance.', 'Sport rapide et dynamique nécessitant adresse et coordination.', 'https://www.fiba.basketball', 'Los Angeles Lakers, Golden State Warriors, Michael Jordan, LeBron James', 'NBA, EuroLeague, Coupe du Monde FIBA', 'Attention aux dynamiques d''équipe et aux statistiques offensives', 'Panier à 2pts ou 3pts, lancer franc 1pt', 102.5),
    
    ('Tennis', 'tennis', 'Mondial', 180, 2, 'Les joueurs doivent renvoyer la balle par-dessus le filet. Un set est gagné avec 6 jeux et au moins 2 jeux d''écart.', 'Sport individuel exigeant technique, endurance et mental.', 'https://www.itftennis.com', 'Roger Federer, Rafael Nadal, Novak Djokovic, Serena Williams', 'Wimbledon, Roland Garros, US Open, Australian Open', 'Étudiez la surface de jeu et les confrontations directes', 'Sets gagnés (2 ou 3 selon format)', 0),
    
    ('Rugby', 'rugby', 'Europe/Océanie', 80, 30, 'Deux équipes de 15 joueurs s''affrontent pour marquer des essais en portant le ballon ovale dans l''en-but adverse.', 'Sport de contact alliant puissance physique et stratégie collective.', 'https://www.world.rugby', 'All Blacks, Springboks, XV de France', 'Coupe du Monde de Rugby, Tournoi des Six Nations', 'Considérez les conditions météo et l''état physique des équipes', 'Essai 5pts, transformation 2pts, pénalité 3pts', 45.0),
    
    ('Volleyball', 'volleyball', 'Mondial', 90, 12, 'Deux équipes de 6 joueurs s''affrontent en faisant passer le ballon par-dessus le filet en trois touches maximum.', 'Sport d''équipe nécessitant coordination et communication.', 'https://www.fivb.com', 'Brésil, Russie, États-Unis', 'Ligue Mondiale, Championnat du Monde', 'Analysez les statistiques de service et de réception', 'Sets gagnés (3 sets pour gagner)', 0),

    ('Hockey sur Glace', 'hockey-sur-glace', 'Amérique du Nord/Europe', 60, 12, 'Deux équipes de 6 joueurs s''affrontent sur une patinoire pour marquer des buts avec un palet.', 'Sport rapide et physique combinant patinage et habileté avec la crosse.', 'https://www.iihf.com', 'Montréal Canadiens, Toronto Maple Leafs, Wayne Gretzky, Sidney Crosby', 'NHL, Championnat du Monde IIHF, Coupe Stanley', 'Étudiez les statistiques de power play et les gardiens', '1 but = 1 point', 5.5),

    ('Baseball', 'baseball', 'Amérique/Asie', 180, 18, 'Deux équipes s''affrontent en alternant entre attaque (batting) et défense (fielding) sur 9 manches.', 'Sport tactique mêlant puissance, précision et stratégie.', 'https://www.mlb.com', 'New York Yankees, Boston Red Sox, Babe Ruth, Mike Trout', 'MLB World Series, Japan NPB', 'Analysez les statistiques des lanceurs et frappeurs', 'Points marqués par course complète', 8.5),

    ('Cricket', 'cricket', 'Commonwealth', 480, 22, 'Deux équipes s''affrontent en alternant batting et bowling. Les matchs peuvent durer plusieurs jours.', 'Sport traditionnel nécessitant endurance et technique.', 'https://www.icc-cricket.com', 'Inde, Australie, Virat Kohli, Shane Warne', 'ICC World Cup, The Ashes', 'Tenez compte des conditions météo et du terrain', 'Runs et wickets', 250.0),

    ('Handball', 'handball', 'Europe', 60, 14, 'Deux équipes de 7 joueurs s''affrontent pour marquer des buts en se passant le ballon à la main.', 'Sport dynamique combinant vitesse et puissance.', 'https://www.ihf.info', 'Barça, Paris Saint-Germain, Nikola Karabatic', 'Championnat du Monde IHF, Ligue des Champions EHF', 'Observez les performances des gardiens', '1 but = 1 point', 50.0),

    ('Golf', 'golf', 'Mondial', 240, 1, 'Les joueurs doivent compléter un parcours en frappant une balle avec des clubs en un minimum de coups.', 'Sport de précision nécessitant concentration et technique.', 'https://www.pgatour.com', 'Tiger Woods, Rory McIlroy, Jack Nicklaus', 'The Masters, The Open Championship, PGA Championship', 'Analysez la forme récente et l''adaptation au parcours', 'Nombre total de coups', 72.0),

    ('Boxe', 'boxe', 'Mondial', 36, 2, 'Deux boxeurs s''affrontent sur un ring pendant plusieurs rounds de 3 minutes.', 'Sport de combat alliant technique, stratégie et condition physique.', 'https://www.wbaboxing.com', 'Muhammad Ali, Mike Tyson, Floyd Mayweather', 'Championnats du Monde WBA, WBC, IBF', 'Étudiez les styles de combat et l''historique', 'Points par round ou KO', 0),

    ('Athlétisme', 'athletisme', 'Mondial', 0, 1, 'Comprend diverses disciplines : course, saut, lancer. Les compétitions peuvent durer plusieurs jours.', 'Sport fondamental testant les limites humaines.', 'https://www.worldathletics.org', 'Usain Bolt, Carl Lewis, Allyson Felix', 'Jeux Olympiques, Championnats du Monde', 'Analysez les records personnels et conditions', 'Temps, distance ou hauteur', 0),

    ('Natation', 'natation', 'Mondial', 0, 1, 'Les nageurs s''affrontent sur différentes distances et styles de nage.', 'Sport complet sollicitant l''ensemble du corps.', 'https://www.fina.org', 'Michael Phelps, Katie Ledecky, Ian Thorpe', 'Jeux Olympiques, Championnats du Monde FINA', 'Considérez les temps récents et le style', 'Temps chronométré', 0),

    ('Cyclisme', 'cyclisme', 'Europe/Mondial', 240, 1, 'Course à vélo sur route ou piste. Les grands tours durent trois semaines.', 'Sport d''endurance nécessitant tactique et résistance.', 'https://www.uci.org', 'Eddy Merckx, Chris Froome, Peter Sagan', 'Tour de France, Giro d''Italia, Vuelta', 'Étudiez le parcours et la forme des coureurs', 'Temps et points par étape', 0),

    ('Judo', 'judo', 'Asie/Monde', 5, 2, 'Combat au sol ou debout visant à marquer des points ou obtenir une soumission.', 'Art martial japonais devenu sport olympique.', 'https://www.ijf.org', 'Teddy Riner, Lucie Décosse, Jigoro Kano', 'Jeux Olympiques, Championnats du Monde IJF', 'Analysez les techniques préférées', 'Ippon (10 pts), Waza-ari (7 pts)', 0),

    ('Escrime', 'escrime', 'Europe/Monde', 9, 2, 'Combat à l''épée, au fleuret ou au sabre. Les assauts sont rapides et techniques.', 'Sport d''opposition alliant précision et rapidité.', 'https://fie.org', 'Enzo Lefort, Valentina Vezzali', 'Jeux Olympiques, Championnats du Monde FIE', 'Observez les styles d''attaque', 'Touches valides', 5.0),

    ('Badminton', 'badminton', 'Asie/Europe', 45, 2, 'Les joueurs s''affrontent en frappant un volant par-dessus un filet.', 'Sport rapide nécessitant réflexes et endurance.', 'https://www.bwfbadminton.com', 'Lin Dan, Lee Chong Wei, Carolina Marín', 'BWF World Championships, All England Open', 'Étudiez les styles de jeu', 'Sets gagnés (2 sur 3)', 42.0),

    ('Ski Alpin', 'ski-alpin', 'Europe/Amérique du Nord', 2, 1, 'Descente à ski sur piste balisée. Plusieurs disciplines : descente, slalom, géant.', 'Sport d''hiver technique et rapide.', 'https://www.fis-ski.com', 'Marcel Hirscher, Mikaela Shiffrin', 'Coupe du Monde FIS, Jeux Olympiques d''hiver', 'Analysez les conditions de neige', 'Temps chronométré', 0),

    ('Surf', 'surf', 'Océanie/Amériques', 30, 1, 'Les surfeurs sont jugés sur leurs figures et leur maîtrise des vagues.', 'Sport de glisse en harmonie avec l''océan.', 'https://www.worldsurfleague.com', 'Kelly Slater, Stephanie Gilmore', 'World Surf League, Jeux Olympiques', 'Étudiez les conditions de vagues', 'Points sur figures et style', 15.0),

    ('MMA', 'mma', 'Mondial', 15, 2, 'Combat libre mélangeant différentes disciplines martiales.', 'Sport de combat complet et intense.', 'https://www.ufc.com', 'Khabib Nurmagomedov, Amanda Nunes', 'UFC Championships, Bellator', 'Analysez les styles de combat', 'KO, soumission ou décision', 0),

    ('Padel', 'padel', 'Europe/Amérique du Sud', 60, 4, 'Mélange de tennis et squash se jouant en double avec des murs.', 'Sport en pleine expansion combinant technique et tactique.', 'https://www.padelfip.com', 'Fernando Belasteguín, Juan Lebrón', 'World Padel Tour, Championnats du Monde', 'Observez les dynamiques d''équipe', 'Sets gagnés (2 sur 3)', 16.0);
`; 