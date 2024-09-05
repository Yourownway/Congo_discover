"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./Mobile/Menu/MobileMenu";
import HeroSlider from "../Hero/HeroSlider";

const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuTransitionEnded, setMenuTransitionEnded] = useState(true);

  useEffect(() => {
    const handleScroll = (value: boolean) => {
      if (window.scrollY > 1) {
        setIsScrolled(value);
      } else {
        setIsScrolled(false);
      }
    };

    const handleBodyScroll = (disable: boolean) => {
      if (disable) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("scroll", () => handleScroll(true));
    handleBodyScroll(opened);

    return () => {
      window.removeEventListener("scroll", () => handleScroll(false));
      handleBodyScroll(false);
    };
  }, [opened]);

  useEffect(() => {
    if (opened) {
      setMenuTransitionEnded(false);
    }
  }, [opened]);

  const handleTransitionEnd = () => {
    if (!opened) {
      setMenuTransitionEnded(true);
    }
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-4 fixed top-0 z-50 transition-all duration-300">
        <div className="flex items-center ">
          <span
            className={`text-2xl font-bold ${
              menuTransitionEnded && !isScrolled && !opened
                ? "text-[#FFF]"
                : "text-transparent"
            }`}
          >
            Logo
          </span>
        </div>
        <div className="z-30 flex items-center">
          <div
            className={`tham tham-e-squeeze tham-w-6 ${
              opened ? "tham-active" : ""
            }`}
            onClick={() => setOpened(!opened)}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="tham-box">
              <div className="tham-inner bg-[#E07B39]" />
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu opened={opened} setOpened={setOpened} />

      <div className="flex flex-col items-center mt-20">
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
