import localFont from "next/font/local";
import Naviguation from "@/components/naviguation";

/* Style */

import "../styles/globals.css";
import "../styles/home.css";
import "../styles/sportDetails.css";
import "../styles/sports.css";
import "../styles/naviguation.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Trouves ton sport",
  description: "L'objectif de cette application est de faire découvrir différents sport, ainsi que leurs règles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Naviguation />
        {children}
      </body>
    </html>
  );
}
