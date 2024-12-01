import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "../../styles/globals.css";
import "../../styles/home.css";
import "../../styles/sportDetails.css";
import "../../styles/sports.css";
import "../../styles/naviguation.css";

export default function SportDetails() {
  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBettingInfo, setShowBettingInfo] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;

    async function fetchSportDetails() {
      try {
        setLoading(true);
        const res = await fetch(`/api/sports/${slug}`);
        if (!res.ok) throw new Error("Erreur lors du chargement des détails");
        const data = await res.json();
        setSport(data);
      } catch (error) {
        console.error(error.message);
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
    <div className="section_all">
      <div className="sport-details-container">
        <button className="back-btn" onClick={() => router.push("/sports")}>
          ← Retour
        </button>
        <div
          className="sport-image"
          style={{
            backgroundImage: `url(${
              sport.image_sport ||
              "https://img.freepik.com/photos-gratuite/outils-sport_53876-138077.jpg"
            })`,
          }}
        >
          <h1 className="sport-name">{sport.name}</h1>
          <a
            className="federation-link"
            href={sport.federation_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="federation-btn">Lien vers la fédération</button>
          </a>
        </div>

        <div className="sport-details">
          <div className="details-grid">
            <div className="detail-item-0">
              <strong>Région :</strong> {sport.region}
            </div>
            <div className="detail-item-0">
              <strong>Durée du match :</strong> {sport.match_duration}
            </div>
            <div className="detail-item-1">
              <strong>Joueurs requis :</strong> {sport.players_count}
            </div>
            <div className="detail-item-1">
              <strong>Calcul des points :</strong> {sport.points_calculation}
            </div>
            <div className="detail-item-1">
              <strong>Moyenne des scores :</strong> {sport.score_average}
            </div>
            <div className="detail-item-2">
              <strong>Règles :</strong> {sport.rules}
            </div>
            <div className="detail-item-2">
              <strong>Description :</strong> {sport.description}
            </div>
            <div className="detail-item-0">
              <strong>Équipes ou joueurs célèbres :</strong>{" "}
              {sport.top_teams_or_players}
            </div>
            <div className="detail-item-0">
              <strong>Compétitions majeures :</strong> {sport.top_championships}
            </div>
          </div>

          <div className="betting-section">
            <button
              className="toggle-betting-info"
              onClick={() => setShowBettingInfo((prev) => !prev)}
            >
              {showBettingInfo
                ? "Masquer les informations sur les paris"
                : "Afficher les informations sur les paris"}
            </button>

            {showBettingInfo && (
              <div className="betting-info">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
