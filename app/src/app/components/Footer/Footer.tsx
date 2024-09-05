"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section Informations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">À propos</h3>
          <p className="text-sm leading-relaxed">
            Explorez Kinshasa et découvrez sa richesse culturelle, son histoire, et son
            dynamisme à travers nos recommandations et guides locaux.
          </p>
        </div>

        {/* Section Liens de Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#E07B39] transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-[#E07B39] transition">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/experiences" className="hover:text-[#E07B39] transition">
                Expériences
              </Link>
            </li>
            <li>
              <Link href="/idees-de-voyage" className="hover:text-[#E07B39] transition">
                Idées de Voyage
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E07B39] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section Réseaux Sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07B39] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07B39] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07B39] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Section Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © 2024 Explore Congo. Tous droits réservés.
      </div>
    </footer>
  );
}
