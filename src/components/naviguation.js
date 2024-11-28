"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo/logo.webp";

const Navigation = () => {
  return (
    <nav className="navbar">
      {/* Logo à gauche */}
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={50} height={50} priority />
        </Link>
      </div>

      {/* Menu de navigation centré */}
      <ul className="navLinks">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/sports">Sports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
