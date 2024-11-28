"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/naviguation";

import "../../styles/globals.css";
import "../../styles/home.css";
import "../../styles/sportDetails.css";
import "../../styles/sports.css";
import "../../styles/naviguation.css";

export default function SportsPage() {
  const [sports, setSports] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchSports() {
      try {
        const res = await fetch("/api/sports");
        if (!res.ok) throw new Error("Erreur de récupération des données");
        const data = await res.json();
        setSports(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchSports();
  }, []);

  const filteredSports = sports.filter(
    (sport) =>
      sport.name.toLowerCase().includes(search.toLowerCase()) &&
      (regionFilter
        ? sport.region.toLowerCase().includes(regionFilter.toLowerCase())
        : true)
  );

  return (
    <div className="sports-page">
      <Navigation />
      <h1 className="sports-title">Liste des Sports</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Rechercher un sport..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Rechercher un sport"
        />
        <input
          type="text"
          placeholder="Filtrer par région..."
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          aria-label="Filtrer par région"
        />
      </div>
      <div className="grid">
        {filteredSports.length > 0 ? (
          filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="card"
              tabIndex={0}
              role="button"
              onClick={() => router.push(`/sports/${sport.slug}`)}
              onKeyPress={(e) => {
                if (e.key === "Enter") router.push(`/sports/${sport.slug}`);
              }}
            >
              <h2>{sport.name}</h2>
              <p>{sport.region}</p>
            </div>
          ))
        ) : (
          <p className="no-results">Aucun sport trouvé.</p>
        )}
      </div>
    </div>
  );
}
