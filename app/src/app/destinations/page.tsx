"use client";

import Image from "next/image";
import Link from "next/link";

export default function DestinationPage() {
  return (
    <div className="bg-[#F2E3C6] text-[#333] px-6 py-8 md:py-12">
      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
        Découvrez Nos Destinations
      </h1>

      {/* Section des villes */}
      <div className="space-y-16">
        {/* Ville : Kinshasa */}
        <section id="kinshasa" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kinshasa</h2>
            <p className="mb-4 leading-relaxed">
              Capitale de la République Démocratique du Congo, Kinshasa est une ville vibrante et
              pleine de vie. Elle est le cœur politique, économique et culturel du pays, offrant
              une multitude d&apos;expériences, de sa scène artistique dynamique à ses nombreux
              monuments historiques.
            </p>
            <Link
              href="/destination/kinshasa"
              className="inline-block bg-[#E07B39] text-white py-2 px-4 rounded-full hover:bg-[#C96A2F] transition"
            >
              Explorer Kinshasa
            </Link>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt="Vue de Kinshasa"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
          </div>
        </section>

        {/* Ville : Goma */}
        <section id="goma" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Goma</h2>
            <p className="mb-4 leading-relaxed">
              Située au bord du lac Kivu et à proximité du parc national des Virunga, Goma est une
              destination incontournable pour les amoureux de nature et d&apos;aventure. Explorez ses
              paysages à couper le souffle, ses volcans majestueux, et découvrez la culture
              locale.
            </p>
            <Link
              href="/destination/goma"
              className="inline-block bg-[#E07B39] text-white py-2 px-4 rounded-full hover:bg-[#C96A2F] transition"
            >
              Explorer Goma
            </Link>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1528740561666-dc2479dc08c8"
              alt="Vue de Goma"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
          </div>
        </section>

        {/* Ville : Lubumbashi */}
        <section id="lubumbashi" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Lubumbashi</h2>
            <p className="mb-4 leading-relaxed">
              Lubumbashi, la deuxième plus grande ville de la RDC, est connue pour ses industries
              minières et sa richesse culturelle. Découvrez son charme unique, son architecture
              coloniale, et ses nombreux marchés et restaurants qui proposent une cuisine
              locale authentique.
            </p>
            <Link
              href="/destination/lubumbashi"
              className="inline-block bg-[#E07B39] text-white py-2 px-4 rounded-full hover:bg-[#C96A2F] transition"
            >
              Explorer Lubumbashi
            </Link>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1519682577862-22b62b24e493"
              alt="Vue de Lubumbashi"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
