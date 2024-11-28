// src/pages/home/page.js
import Link from "next/link";
import "./home.css"; // Import du CSS local

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Bienvenue sur la plateforme des sports</h1>
      <p className="home-description">Découvrez les sports et leurs détails en un clic.</p>
      <Link href="/sports">
        <button className="home-btn">Voir les sports</button>
      </Link>
    </div>
  );
}

export default Home;
