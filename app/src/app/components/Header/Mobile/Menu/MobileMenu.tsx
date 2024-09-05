"use client";

import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ItemMenu from "./SubMenu/ItemMenu/ItemMenu";
import SubMenu from "./SubMenu/SubMenu";

interface MobileMenuProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export default function MobileMenu({ opened, setOpened }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuHistory, setMenuHistory] = useState<string[]>([]); // Historique de navigation

  const handleSubMenuToggle = (menu: string) => {
    if (menuHistory[menuHistory.length - 1] !== menu) {
      setMenuHistory((prevHistory) => [...prevHistory, menu]);
    }
    setActiveMenu(menu);
  };

  const handleBackNavigation = (index: number) => {
    const newHistory = menuHistory.slice(0, index + 1);
    setMenuHistory(newHistory);
    setActiveMenu(newHistory[newHistory.length - 1] || null);
  };

  const handleMenuReset = () => {
    setMenuHistory([]);
    setActiveMenu(null);
  };

  return (
    <div
      className={`z-20 fixed top-0 left-0 w-full h-full bg-[#222] p-6 transition-transform duration-500 ease-out ${
        opened ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Timeline de navigation */}
      <div className="flex flex-wrap justify-center items-center space-x-2 mb-4 mt-8">
        <button
          onClick={handleMenuReset}
          className={`text-sm transition ${
            activeMenu ? "text-white" : "text-[#E07B39]"
          } hover:text-[#E07B39]`}
        >
          MENU
        </button>
        {menuHistory.map((menu, index) => (
          <span key={index} className="text-white flex items-center">
            /
            <button
              onClick={() => handleBackNavigation(index)}
              className={`ml-1 text-sm transition ${
                index === menuHistory.length - 1 ? "text-[#E07B39]" : "text-white"
              } hover:text-[#E07B39]`}
            >
              {menu.replaceAll('_', ' ').toUpperCase()}
            </button>
          </span>
        ))}
      </div>

      {/* Menu principal */}
      {!activeMenu && (
        <ul className="flex flex-col justify-center space-y-8 text-white text-lg py-8">
          <ItemMenu text="DÉCOUVRIR LE CONGO" href="/" onClick={() => setOpened(false)} />
          <ItemMenu
            text="DESTINATIONS"
            onClick={() => handleSubMenuToggle("DESTINATIONS")}
            hasSubMenu
          />
          <ItemMenu
            text="EXPÉRIENCES"
            onClick={() => handleSubMenuToggle("EXPÉRIENCES")}
            hasSubMenu
          />
          <ItemMenu
            text="IDÉES DE VOYAGE"
            onClick={() => handleSubMenuToggle("IDÉES DE VOYAGE")}
            hasSubMenu
          />
          <ItemMenu text="ACTUALITÉS ET ÉVÉNEMENTS" href="/actualites" onClick={() => setOpened(false)} />
          <ItemMenu text="INFO PRATIQUE" href="/services" onClick={() => setOpened(false)} />
          <ItemMenu text="FAQ ET CONSEILS PRATIQUES" href="/faq" onClick={() => setOpened(false)} />
        </ul>
      )}

      {/* Affichage du sous-menu */}
      {activeMenu && (
        <SubMenu
          activeMenu={activeMenu}
          menuHistory={menuHistory}
          onBack={handleBackNavigation}
          onToggleSubMenu={handleSubMenuToggle}
          setOpened={setOpened}
        />
      )}
    </div>
  );
}
