"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
const classNames = require("classnames");

const poppins = Poppins({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["400", "800"],
	display: "swap",
});

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Section Héro */}
			<section
				className="bg-cover bg-center "
				style={{ backgroundImage: "url('/hero-image.jpg')" }}
			>
				<div className="bg-black bg-opacity-50 text-white text-center py-10 px-4">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">
						Bienvenue au Congo
					</h1>
					<p className="text-lg md:text-2xl mb-8">
						Découvrez la beauté du Congo, de ses paysages à sa culture vibrante.
					</p>
					<button className="bg-[#E07B39] text-white py-2 px-6 rounded-full hover:bg-[#222] transition">
						Explorez Plus
					</button>
				</div>
			</section>

			{/* Section Articles en Vedette */}
			<section className="py-10 px-4">
				<h2 className="text-2xl font-bold text-center mb-6">
					Articles en Vedette
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Carte Article */}
					<div className="bg-white shadow-md rounded-lg overflow-hidden">
						<Image
							src=""
							alt="Article Image"
							className="w-full h-48 object-cover"
							width={500} 
							height={300} 
						/>
						<div className="p-4">
							<h3 className="text-xl font-bold mb-2">
								Les Meilleures Activités à Kinshasa
							</h3>
							<p className="text-gray-700 mb-4">
								Découvrez les incontournables de Kinshasa, des sites historiques
								aux marchés locaux animés.
							</p>
							<button className="bg-[#E07B39] text-white py-2 px-4 rounded hover:bg-[#222] transition">
								En savoir plus
							</button>
						</div>
					</div>

					{/* Carte Article Supplémentaire */}
					<div className="bg-white shadow-md rounded-lg overflow-hidden">
						<Image
							src=""
							alt="Article Image"
							className="w-full h-48 object-cover"
							width={500} 
							height={300} 
						/>
						<div className="p-4">
							<h3 className="text-xl font-bold mb-2">
								Explorer la Faune du Congo
							</h3>
							<p className="text-gray-700 mb-4">
								Partez à la découverte de la faune unique du Congo, des forêts
								tropicales aux réserves naturelles.
							</p>
							<button className="bg-[#E07B39] text-white py-2 px-4 rounded hover:bg-[#222] transition">
								En savoir plus
							</button>
						</div>
					</div>

					{/* Carte Article Supplémentaire */}
					<div className="bg-white shadow-md rounded-lg overflow-hidden">
						<Image
							src=""
							alt="Article Image"
							className="w-full h-48 object-cover"
							width={500} 
							height={300} 
						/>
						<div className="p-4">
							<h3 className="text-xl font-bold mb-2">
								Cuisine Congolaise : Saveurs et Recettes
							</h3>
							<p className="text-gray-700 mb-4">
								Découvrez les délices culinaires du Congo, des plats
								traditionnels aux recettes modernes.
							</p>
							<button className="bg-[#E07B39] text-white py-2 px-4 rounded hover:bg-[#222] transition">
								En savoir plus
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Section Supplémentaire : Services */}
			<section className="py-10 px-4 bg-white">
				<h2 className="text-2xl font-bold text-center mb-6">Nos Services</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Carte Service */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
						<h3 className="text-xl font-bold mb-2">Transport Local</h3>
						<p className="text-gray-700">
							Réservez vos moyens de transport pour vos voyages à travers le
							Congo.
						</p>
					</div>

					{/* Carte Service */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
						<h3 className="text-xl font-bold mb-2">Guides Touristiques</h3>
						<p className="text-gray-700">
							Engagez des guides locaux pour une expérience authentique et
							personnalisée.
						</p>
					</div>

					{/* Carte Service */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
						<h3 className="text-xl font-bold mb-2">Réservations d&apos;Hôtels</h3>
						<p className="text-gray-700">
							Trouvez et réservez les meilleurs hôtels au Congo à des tarifs
							compétitifs.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
