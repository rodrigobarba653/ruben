"use client";

import { Link } from "react-scroll";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

interface NavLinksProps {
  toggleMenu?: () => void;
}

const NavLinks = ({ toggleMenu }: NavLinksProps) => {
  const { language } = useLanguage();
  const n = texts[language].navbar.navItems;

  const navItems = [
    { name: n.home, id: "home" },
    { name: n.composer, id: "composer" },
    { name: n.soundDesign, id: "sound-design" },
    { name: n.discography, id: "discography" },
    { name: n.credits, id: "credits" },
    { name: n.bio, id: "bio" },
    { name: n.awards, id: "awards" },
    { name: n.contact, id: "contact" },
  ];

  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 md:gap-x-5 md:gap-y-2 text-base md:text-sm lg:text-base">
      {navItems.map(({ name, id }) => (
        <li key={id}>
          <Link
            to={id}
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
