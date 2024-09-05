"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroSliderProps {
  images: string[];
}

export default function HeroSlider({ images }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full mt-2 overflow-hidden">
      <div className="relative w-full h-[209px] transition-opacity duration-1000 ease-in-out">
        <Image
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-center mt-2 mb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-[#E07B39]" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
