"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/naviguation";
import Footer from "@/components/footer";

import "../../styles/globals.css";
import "../../styles/home.css";
import "../../styles/sportDetails.css";
import "../../styles/sports.css";
import "../../styles/naviguation.css";
import "../../styles/footer.css";

export default function SportsPage() {
  const [sports, setSports] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0
  });
  const router = useRouter();

  useEffect(() => {
    async function fetchSports() {
      try {
        setLoading(true);
        setError(null);
        const queryParams = new URLSearchParams({
          page: pagination.page,
          limit: pagination.limit,
          search: search,
          region: regionFilter
        });
        
        const res = await fetch(`/api/sports?${queryParams}`);
        if (!res.ok) throw new Error("Erreur de récupération des données");
        
        const data = await res.json();
        setSports(data.data);
        setPagination(data.pagination);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSports();
  }, [search, regionFilter, pagination.page, pagination.limit]);

  const filteredSports = sports || [];

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
        <button onClick={() => window.location.reload()}>Réessayer</button>
      </div>
    );
  }

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
      
      {pagination.totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
            disabled={pagination.page === 1}
          >
            Précédent
          </button>
          <span>
            Page {pagination.page} sur {pagination.totalPages}
          </span>
          <button
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
            disabled={pagination.page === pagination.totalPages}
          >
            Suivant
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}
