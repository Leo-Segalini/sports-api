import React from 'react';
import Navigation from '@/components/naviguation';
import Footer from '@/components/footer';

import "../styles/MentionsLegales.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/sportDetails.css";
import "../styles/sports.css";
import "../styles/naviguation.css";
import "../styles/footer.css";
import "../styles/MentionsLegales.css";

function MentionsLegales() {
  return (
    <div className="mentions-container">
        <Navigation />
      <h1 className="mentions-title">MENTIONS LÉGALES</h1>

      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site <strong>Trouve ton sport</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
      </p>

      <section className="mentions-section">
        <h2>Édition du site</h2>
        <p>
          Le présent site, accessible à l’URL <a href="https://found-your-sport.vercel.app/" target="_blank" rel="noopener noreferrer">https://found-your-sport.vercel.app/</a> (le « Site »), est édité par :
        </p>
        <p>
          <strong>Léo Segalini</strong>, résidant 37B rue des camomilles 97436 Saint Leu, de nationalité Française (France), né(e) le 16/11/1995.
        </p>
      </section>

      <section className="mentions-section">
        <h2>Hébergement</h2>
        <p>
          Le Site est hébergé par la société <strong>Vercel</strong>, situé 440 N Barranca Avenue #4133 Covina, CA 91723 United States, 
          (contact téléphonique ou email : +1 951 383 6898).
        </p>
      </section>

      <section className="mentions-section">
        <h2>Directeur de publication</h2>
        <p>
          Le Directeur de la publication du Site est <strong>Léo Segalini</strong>.
        </p>
      </section>

      <section className="mentions-section">
        <h2>Nous contacter</h2>
        <p>
          Par téléphone : <strong>+33 6 70 96 33 71</strong><br />
          Par email : <strong>leo.segalini@outlook.com</strong><br />
          Par courrier : <strong>37B rue des camomilles 97436 Saint Leu</strong>
        </p>
      </section>

      <footer className="mentions-footer">
        <p>Génération des mentions légales par <a href="https://www.legalstart.fr/" target="_blank" rel="noopener noreferrer">Legalstart</a>.</p>
      </footer>
    </div>
  );
}

export default MentionsLegales;
