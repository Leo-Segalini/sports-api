"use client";

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
    return <div className="loading">Chargement en cours...</div>;
  }

  if (!sport) {
    return (
      <div className="no-sport">
        <p>Aucun sport trouvé.</p>
        <button
          className="back-btn"
          onClick={() => router.push("/sports")}
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  return (
    <div className="sport-details">
      <button className="back-btn" onClick={() => router.push("/sports")}>
        ← Retour
      </button>
      <h1 className="sport-name">{sport.name}</h1>
      <div className="details-grid">
        <div className="detail-item">
          <strong>Région :</strong> {sport.region}
        </div>
        <div className="detail-item">
          <strong>Durée du match :</strong> {sport.match_duration}
        </div>
        <div className="detail-item">
          <strong>Moyenne des scores :</strong> {sport.score_average}
        </div>
        <div className="detail-item">
          <strong>Joueurs requis :</strong> {sport.players_count}
        </div>
        <div className="detail-item">
          <strong>Calcul des points :</strong> {sport.points_calculation}
        </div>
        <div className="detail-item">
          <strong>Règles :</strong> {sport.rules}
        </div>
      </div>
    </div>
  );
}
