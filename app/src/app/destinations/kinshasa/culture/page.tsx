"use client";

import Image from "next/image";

export default function CulturePage() {
	return (
		<div className="bg-[#F2E3C6] text-[#333] px-6 py-8 md:py-12">
			{/* Titre principal */}
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
				Culture de Kinshasa
			</h1>

			{/* Section Musées et Galeries d'Art */}
			<section id="musées-et-galeries-dart" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Musées et Galeries d&apos;Art
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Découvrez les trésors culturels de Kinshasa en visitant ses musées
							et galeries d&apos;art. Du Musée National de la RDC à l&apos;Académie des
							Beaux-Arts, chaque visite vous offrira une plongée fascinante dans
							l&apos;histoire et l&apos;art du pays.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Musée National de la RDC</li>
							<li>Académie des Beaux-Arts</li>
							<li>Galerie Symphonie des Arts</li>
						</ul>
					</div>
					<div>
						<Image
							src="https://placehold.co/600x400"
							alt="Musée National de la RDC"
							width={500}
							height={300}
							className="rounded-lg object-cover w-full h-64 shadow-md"
						/>
					</div>
				</div>
			</section>

			{/* Section Festivals et Événements Culturels */}
			<section id="festivals-et-evenements-culturels" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Festivals et Événements Culturels
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Kinshasa est un carrefour de la culture africaine avec des
							festivals et des événements tout au long de l&apos;année. Profitez de
							la Fête de la Musique ou plongez dans le monde du cinéma au
							Festival de Kinshasa (FICKIN).
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Fête de la Musique</li>
							<li>Festival de Cinéma de Kinshasa (FICKIN)</li>
							<li>Festival de Jazz de Kinshasa</li>
						</ul>
					</div>
					<div>
						<Image
							src="https://placehold.co/600x400"
							alt="Fête de la Musique"
							width={500}
							height={300}
							className="rounded-lg object-cover w-full h-64 shadow-md"
						/>
					</div>
				</div>
			</section>

			{/* Section Artisanat Local */}
			<section id="artisanat-local" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Artisanat Local
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							L&apos;artisanat local de Kinshasa est riche et diversifié. Explorez
							les marchés pour découvrir des objets artisanaux uniques, des
							sculptures, des masques et des peintures qui reflètent l&apos;âme du
							Congo.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Marché des Voleurs</li>
							<li>Marché des Artisans de Kintambo</li>
							<li>Village des Artistes de la Cité de l&apos;Union</li>
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

			{/* Section Monuments et Sites Historiques */}
			<section id="monuments-et-sites-historiques" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Monuments et Sites Historiques
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Kinshasa possède de nombreux monuments et sites historiques qui
							témoignent de son passé riche et de son évolution. Explorez des
							sites tels que la Basilique Sainte-Anne, le Palais de la Nation et
							la Cathédrale Notre-Dame du Congo.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Basilique Sainte-Anne</li>
							<li>Palais de la Nation</li>
							<li>Cathédrale Notre-Dame du Congo</li>
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
