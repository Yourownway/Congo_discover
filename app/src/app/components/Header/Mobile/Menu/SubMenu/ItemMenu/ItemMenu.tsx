"use client";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

interface ItemMenuProps {
  text: string;
  href?: string;
  onClick?: () => void;
  hasSubMenu?: boolean;
}

export default function ItemMenu({ text, href, onClick, hasSubMenu }: ItemMenuProps) {
  return (
    <li className="flex justify-between items-center cursor-pointer hover:text-[#E07B39] transition">
      {href ? (
        <Link href={href} onClick={onClick}>
          {text}
        </Link>
      ) : (
        <div onClick={onClick} className="flex items-center">   
         {/* @ts-ignore*/}       
          {text} {hasSubMenu && <BsChevronDown className="ml-2" />}
        </div>
      )}
    </li>
  );
}
