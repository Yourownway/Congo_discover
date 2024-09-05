"use client";

import Image from "next/image";

export default function GomaCulturePage() {
	return (
		<div className="bg-[#F2E3C6] text-[#333] px-6 py-8 md:py-12">
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
				Culture de Goma
			</h1>

			<section id="musées-et-galeries-dart" className="mb-16">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Musées et Galeries d&apos;Art
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					<div>
						<p className="mb-4 leading-relaxed">
							Goma abrite des musées et galeries qui préservent l&apos;art et l&apos;histoire de la région. Explorez des collections uniques, des artefacts culturels, et des expositions contemporaines.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Musée de Goma</li>
							<li>Galerie d&apos;Art Contemporain de Virunga</li>
							<li>Centre Culturel de Goma</li>
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
							Goma est animée par des festivals et événements qui célèbrent la musique, la danse, et la culture locale. Ne manquez pas les spectacles vivants et les festivals artistiques.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Festival Amani</li>
							<li>Festival de Danse de Goma</li>
							<li>Journées Culturelles de Goma</li>
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
							Découvrez l&apos;artisanat de Goma, riche en diversité et créativité. Les marchés locaux offrent des sculptures, textiles, bijoux et autres créations artisanales uniques.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Marché des Artisans de Goma</li>
							<li>Boutique des Créateurs de Virunga</li>
							<li>Atelier de Céramique de Goma</li>
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
							Parcourez les monuments historiques de Goma, témoins d&apos;une histoire riche et variée. Visitez les lieux emblématiques qui racontent l&apos;histoire de la ville et de sa culture.
						</p>
						<ul className="list-disc list-inside space-y-2">
							<li>Église de l&apos;Immaculée Conception</li>
							<li>Monument de l&apos;Indépendance</li>
							<li>Vieille Maison du Gouverneur</li>
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
