// src/pages/sport/[slug].js
"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  if (loading) return <div>Chargement...</div>;
  if (!sport) return <div>Aucun sport trouvé.</div>;

  return (
    <div className="sport-details">
      <button className="back-btn" onClick={() => router.push("/sports")}>
        Retour
      </button>
      <h1>{sport.name}</h1>
      <p>Région: {sport.region}</p>
      <p>Durée du match: {sport.match_duration}</p>
      <p>Moyenne des scores: {sport.score_average}</p>
      <p>Joueurs requis: {sport.players_count}</p>
      <p>Calcul des points: {sport.points_calculation}</p>
      <p>Règles: {sport.rules}</p>
    </div>
  );
}
