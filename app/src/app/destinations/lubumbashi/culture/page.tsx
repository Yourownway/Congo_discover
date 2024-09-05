"use client";

import Image from "next/image";

export default function LubumbashiPage() {
	return (
		<div className="bg-[#F2E3C6] text-[#333] px-6 py-8 md:py-12">
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
				Découvrir Lubumbashi
			</h1>

			<section id="musées-et-galeries-dart" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Musées et Galeries d&apos;Art
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Explorez les trésors culturels de Lubumbashi dans ses musées et galeries d&apos;art, offrant une plongée dans l&apos;histoire et l&apos;art de la région.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Musée National de Lubumbashi</li>
							<li>Galerie d&apos;Art Contemporain Mwanga</li>
							<li>Centre Culturel de Lubumbashi</li>
						</ul>
					</div>
					<div>
						<Image
							src="https://placehold.co/600x400"
							alt="Musées et Galeries d'Art"
							width={500}
							height={300}
							className="rounded-lg object-cover w-full h-64 shadow-md"
						/>
					</div>
				</div>
			</section>

			<section id="festivals-et-evenements-culturels" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Festivals et Événements Culturels
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Lubumbashi est animée par des festivals et événements qui célèbrent la culture locale, de la musique aux arts visuels.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Festival International de Jazz de Lubumbashi</li>
							<li>Foire d&apos;Artisanat de Lubumbashi</li>
							<li>Salon du Livre de Lubumbashi</li>
						</ul>
					</div>
					<div>
						<Image
							src="https://placehold.co/600x400"
							alt="Festivals et Événements Culturels"
							width={500}
							height={300}
							className="rounded-lg object-cover w-full h-64 shadow-md"
						/>
					</div>
				</div>
			</section>

			<section id="artisanat-local" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Artisanat Local
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Lubumbashi est réputée pour son artisanat unique. Découvrez des sculptures, objets en cuivre et autres créations dans les marchés locaux.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Marché de la Liberté</li>
							<li>Marché de la Kenya</li>
							<li>Village des Artistes de Lubumbashi</li>
						</ul>
					</div>
					<div>
						<Image
							src="https://placehold.co/600x400"
							alt="Artisanat Local"
							width={500}
							height={300}
							className="rounded-lg object-cover w-full h-64 shadow-md"
						/>
					</div>
				</div>
			</section>

			<section id="monuments-et-sites-historiques" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Monuments et Sites Historiques
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Explorez les monuments et sites historiques de Lubumbashi, témoins de son passé colonial et de son évolution culturelle.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Cathédrale Saint-Pierre et Paul</li>
							<li>Vieille Gare de Lubumbashi</li>
							<li>Palais de la Justice</li>
						</ul>
					</div>
					<div>
						<Image
							src="https://placehold.co/600x400"
							alt="Monuments et Sites Historiques"
							width={500}
							height={300}
							className="rounded-lg object-cover w-full h-64 shadow-md"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
