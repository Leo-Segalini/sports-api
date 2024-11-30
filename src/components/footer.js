"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo/logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </div>

        {/* Lien vers les mentions légales */}
        <div className="footer-link">
          <Link href="/mentions-legales" passHref>
            Mentions légales
          </Link>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
