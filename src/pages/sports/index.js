// src/pages/sports/index.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
      <h1 className="sports-title">Liste des Sports</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Recherche..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Région..."
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        />
      </div>
      <div className="grid">
        {filteredSports.map((sport) => (
          <div
            key={sport.id}
            className="card"
            onClick={() => router.push(`/sports/${sport.slug}`)}
          >
            <h2>{sport.name}</h2>
            <p>{sport.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
