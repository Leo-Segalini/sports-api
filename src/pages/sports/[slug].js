import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import "../../styles/globals.css";
import "../../styles/home.css";
import "../../styles/sportDetails.css";
import "../../styles/sports.css";
import "../../styles/naviguation.css";

export default function SportDetails() {
  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBettingInfo, setShowBettingInfo] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;

    async function fetchSportDetails() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/sports/${slug}`);
        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "Sport non trouvé"
              : "Erreur lors du chargement des détails"
          );
        }
        const data = await res.json();
        setSport(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSportDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Erreur</h2>
        <p>{error}</p>
        <button className="back-btn" onClick={() => router.push("/sports")}>
          Retour à la liste
        </button>
      </div>
    );
  }

  if (!sport) {
    return (
      <div className="no-sport">
        <p>Aucun sport trouvé.</p>
        <button className="back-btn" onClick={() => router.push("/sports")}>
          Retour à la liste
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${sport.name} - Détails du Sport`}</title>
        <meta name="description" content={`Découvrez les règles et informations sur ${sport.name}. ${sport.description?.substring(0, 150)}...`} />
        <meta property="og:title" content={`${sport.name} - Détails du Sport`} />
        <meta property="og:description" content={`Découvrez les règles et informations sur ${sport.name}`} />
        <meta property="og:image" content={sport.image_sport || "https://img.freepik.com/photos-gratuite/outils-sport_53876-138077.jpg"} />
      </Head>
      <div className="section_all">
        <motion.div 
          className="sport-details-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="back-btn" onClick={() => router.push("/sports")}>
            ← Retour
          </button>
          <motion.div
            className="sport-image"
            style={{
              backgroundImage: `url(${
                sport.image_sport ||
                "https://img.freepik.com/photos-gratuite/outils-sport_53876-138077.jpg"
              })`,
            }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="sport-name">{sport.name}</h1>
            {sport.federation_link && (
              <a
                className="federation-link"
                href={sport.federation_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="federation-btn">Lien vers la fédération</button>
              </a>
            )}
          </motion.div>

          <motion.div 
            className="sport-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="details-grid">
              <motion.div className="detail-item-0" whileHover={{ scale: 1.05 }}>
                <strong>Région :</strong> {sport.region}
              </motion.div>
              <motion.div className="detail-item-0" whileHover={{ scale: 1.05 }}>
                <strong>Durée du match :</strong> {sport.match_duration} minutes
              </motion.div>
              <motion.div className="detail-item-1" whileHover={{ scale: 1.05 }}>
                <strong>Joueurs requis :</strong> {sport.players_count}
              </motion.div>
              {sport.points_calculation && (
                <motion.div className="detail-item-1" whileHover={{ scale: 1.05 }}>
                  <strong>Calcul des points :</strong> {sport.points_calculation}
                </motion.div>
              )}
              {sport.score_average && (
                <motion.div className="detail-item-1" whileHover={{ scale: 1.05 }}>
                  <strong>Moyenne des scores :</strong> {sport.score_average}
                </motion.div>
              )}
              <motion.div className="detail-item-2" whileHover={{ scale: 1.02 }}>
                <strong>Règles :</strong> {sport.rules}
              </motion.div>
              {sport.description && (
                <motion.div className="detail-item-2" whileHover={{ scale: 1.02 }}>
                  <strong>Description :</strong> {sport.description}
                </motion.div>
              )}
              {sport.top_teams_or_players && (
                <motion.div className="detail-item-0" whileHover={{ scale: 1.05 }}>
                  <strong>Équipes ou joueurs célèbres :</strong>{" "}
                  {sport.top_teams_or_players}
                </motion.div>
              )}
              {sport.top_championships && (
                <motion.div className="detail-item-0" whileHover={{ scale: 1.05 }}>
                  <strong>Compétitions majeures :</strong> {sport.top_championships}
                </motion.div>
              )}
            </div>

            {sport.betting_tips && (
              <div className="betting-section">
                <motion.button
                  className="toggle-betting-info"
                  onClick={() => setShowBettingInfo((prev) => !prev)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showBettingInfo
                    ? "Masquer les informations sur les paris"
                    : "Afficher les informations sur les paris"}
                </motion.button>

                {showBettingInfo && (
                  <motion.div 
                    className="betting-info"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="betting-info-background">
                      <div className="betting-details">
                        <p className="warning">
                          <strong>Avertissement :</strong> Les paris sportifs
                          comportent des risques financiers.
                        </p>
                        <p>
                          <strong>Conseils pour les paris :</strong>{" "}
                          {sport.betting_tips}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
