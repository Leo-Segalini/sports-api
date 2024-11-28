// src/pages/home/page.js
import Link from "next/link";
import Image from "next/image";
import bgSport from "../../../public/background/background_accueil.webp";

function Home() {
  return (
    <div className="home">
      <Image src={bgSport} alt="Logo" className="bgImg" />
      <div className="title_section">
        <h1 className="home-title">Bienvenue sur la plateforme des sports</h1>
        <p className="home-description">
          Découvrez les sports et leurs détails en un clic.
        </p>
        <Link href="/sports">
          <button className="home-btn">Voir les sports</button>
        </Link>
      </div>
    </div>

  );
}

export default Home;
