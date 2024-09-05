"use client";

import { useState } from "react";
import MobileMenu from "./Mobile/Menu/MobileMenu";
import HeroSlider from "../Hero/HeroSlider";

const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

export default function Header() {
	const [opened, setOpened] = useState(false);

	return (
		<>
			{/* Barre de Navigation */}
			<nav className="w-full flex items-center justify-between px-6 py-4 relative">
				<div className="flex items-center">
					<span className="text-2xl font-bold text-[#FFF]">Logo</span>
				</div>
				<div className="z-30 flex items-center">
					<div
						className={`tham tham-e-squeeze tham-w-6 ${
							opened ? "tham-active" : ""
						}`}
						onClick={() => setOpened(!opened)}
					>
						<div className="tham-box">
							<div className="tham-inner bg-[#E07B39]" />
						</div>
					</div>
				</div>
				{opened && (
					<div className="absolute top-0 left-0 w-full h-1 bg-[#E07B39] transition-all duration-500 ease-out"></div>
				)}
			</nav>

			{/* Utilisation du composant MenuMobile */}
			<MobileMenu opened={opened} setOpened={setOpened} />

			{/* Utilisation du composant Slider */}

			{/* Autres sections de la page */}
			<div className="flex flex-col items-center">
				<h2 className="text-l md:text-xl lg:text-2xl font-semibold tracking-widest">
					EXPLORING
				</h2>
				<h1 className="mt-1 text-5xl md:text-3xl lg:text-4xl font-bold tracking-wider">
					CONGO
				</h1>
			</div>
			<HeroSlider images={images} />
		</>
	);
}
