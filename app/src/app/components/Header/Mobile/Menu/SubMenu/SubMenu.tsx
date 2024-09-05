"use client";

import ItemMenu from "./ItemMenu/ItemMenu"; // Import du composant ItemMenu
import { BsArrowLeft } from "react-icons/bs";

interface SubMenuProps {
  activeMenu: string;
  menuHistory: string[];
  onBack: (index: number) => void;
  onToggleSubMenu: (menu: string) => void;
  setOpened: (opened: boolean) => void;
}

export default function SubMenu({
  activeMenu,
  menuHistory,
  onBack,
  onToggleSubMenu,
  setOpened,
}: SubMenuProps) {
  // Déterminer la ville active en fonction de l'historique
  const currentCity = menuHistory.includes("KINSHASA")
    ? "kinshasa"
    : menuHistory.includes("GOMA")
    ? "goma"
    : menuHistory.includes("LUBUMBASHI")
    ? "lubumbashi"
    : null;

  return (
    <>
      {/* Affichage du sous-menu "DESTINATIONS" */}
      {activeMenu === "DESTINATIONS" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> DESTINATIONS
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu text="KINSHASA" onClick={() => onToggleSubMenu("KINSHASA")} hasSubMenu />
            <ItemMenu text="GOMA" onClick={() => onToggleSubMenu("GOMA")} hasSubMenu />
            <ItemMenu text="LUBUMBASHI" onClick={() => onToggleSubMenu("LUBUMBASHI")} hasSubMenu />
          </ul>
        </div>
      )}
          {activeMenu === "EXPÉRIENCES" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
               {/* @ts-ignore*/}   
            <BsArrowLeft className="mr-2" /> EXPÉRIENCES
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="EXPÉRIENCE NATURE"
              href="/experiences/nature"
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="EXPÉRIENCE CULTURELLE"
              href="/experiences/culture"
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="EXPÉRIENCE AVENTURE"
              href="/experiences/aventure"
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}
     {activeMenu === "IDÉES DE VOYAGE" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                {/* @ts-ignore*/}     
            <BsArrowLeft className="mr-2" /> IDÉES DE VOYAGE
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="TOUR DÉCOUVERTE"
              href="/idees-voyage/decouverte"
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="CIRCUITS HISTORIQUES"
              href="/idees-voyage/historiques"
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="SÉJOUR GASTRONOMIQUE"
              href="/idees-voyage/gastronomique"
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}
      {/* Sous-menus pour chaque ville */}
      {activeMenu === "KINSHASA" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> KINSHASA
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="CULTURE"
              onClick={() => onToggleSubMenu("CULTURE_KINSHASA")}
              hasSubMenu
            />
            <ItemMenu
              text="ACTIVITÉS"
              href={`/destinations/kinshasa/activites`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="GASTRONOMIE"
              href={`/destinations/kinshasa/gastronomie`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="LE GUIDE KINGTIPS"
              href={`/destinations/kinshasa/kingtips`}
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}

      {/* Sous-menu de niveau 3 pour la culture à Kinshasa */}
      {activeMenu === "CULTURE_KINSHASA" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> CULTURE
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="MUSÉES ET GALERIES D&apos;ART"
              href={`/destinations/kinshasa/culture`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="FESTIVALS ET ÉVÉNEMENTS CULTURELS"
              href={`/destinations/kinshasa/culture#festivals-et-evenements-culturels`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="ARTISANAT LOCAL"
              href={`/destinations/kinshasa/culture#artisanat-local`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="MONUMENTS ET SITES HISTORIQUES"
              href={`/destinations/kinshasa/culture#monuments-et-sites-historiques`}
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}

      {/* Ajout de sous-menus pour les autres villes */}
      {activeMenu === "GOMA" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> GOMA
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="CULTURE"
              onClick={() => onToggleSubMenu("CULTURE_GOMA")}
              hasSubMenu
            />
            <ItemMenu
              text="ACTIVITÉS"
              href={`/destinations/goma/activites`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="GASTRONOMIE"
              href={`/destinations/goma/gastronomie`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="LE GUIDE KINGTIPS"
              href={`/destinations/goma/kingtips`}
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}

      {/* Sous-menu de niveau 3 pour la culture à Goma */}
      {activeMenu === "CULTURE_GOMA" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> CULTURE
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="MUSÉES ET GALERIES D&apos;ART"
              href={`/destinations/goma/culture`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="FESTIVALS ET ÉVÉNEMENTS CULTURELS"
              href={`/destinations/goma/culture#festivals-et-evenements-culturels`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="ARTISANAT LOCAL"
              href={`/destinations/goma/culture#artisanat-local`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="MONUMENTS ET SITES HISTORIQUES"
              href={`/destinations/goma/culture#monuments-et-sites-historiques`}
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}

      {/* Sous-menus pour Lubumbashi */}
      {activeMenu === "LUBUMBASHI" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> LUBUMBASHI
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="CULTURE"
              onClick={() => onToggleSubMenu("CULTURE_LUBUMBASHI")}
              hasSubMenu
            />
            <ItemMenu
              text="ACTIVITÉS"
              href={`/destinations/lubumbashi/activites`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="GASTRONOMIE"
              href={`/destinations/lubumbashi/gastronomie`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="LE GUIDE KINGTIPS"
              href={`/destinations/lubumbashi/kingtips`}
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}

      {/* Sous-menu de niveau 3 pour la culture à Lubumbashi */}
      {activeMenu === "CULTURE_LUBUMBASHI" && (
        <div className="animate-slide-in">
          <div
            className="flex items-center cursor-pointer text-white mb-4 transition-transform duration-500 ease-out"
            onClick={() => onBack(menuHistory.length - 2)}
          >
                     {/* @ts-ignore*/}       
            <BsArrowLeft className="mr-2" /> CULTURE
          </div>
          <ul className="flex flex-col justify-center space-y-4 text-white text-lg">
            <ItemMenu
              text="MUSÉES ET GALERIES D&apos;ART"
              href={`/destinations/lubumbashi/culture`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="FESTIVALS ET ÉVÉNEMENTS CULTURELS"
              href={`/destinations/lubumbashi/culture#festivals-et-evenements-culturels`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="ARTISANAT LOCAL"
              href={`/destinations/lubumbashi/culture#artisanat-local`}
              onClick={() => setOpened(false)}
            />
            <ItemMenu
              text="MONUMENTS ET SITES HISTORIQUES"
              href={`/destinations/lubumbashi/culture#monuments-et-sites-historiques`}
              onClick={() => setOpened(false)}
            />
          </ul>
        </div>
      )}
    </>
  );
}
