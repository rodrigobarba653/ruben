import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage(); // ✅ Only call useLanguage once
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo Scrolls to Top */}
      <Link
        to="home"
        smooth={true}
        duration={600}
        className="text-2xl font-bold cursor-pointer"
      >
        {texts[language].navbar.logo}{" "}
        <span className="text-yellow-400">
          {texts[language].navbar.logoHighlight}
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavLinks />
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="bg-yellow-400 text-black px-3 py-1 rounded-md font-semibold hover:bg-yellow-300 transition ml-4"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Offcanvas Menu */}
      {isOpen && (
        <div className="fixed right-0 top-0 w-64 h-full bg-gray-900 text-white p-6 transform z-50 transition-transform duration-300">
          <div className="justify-between flex w-full">
            <button className="text-2xl self-end" onClick={toggleMenu}>
              ✖
            </button>
            <button
              onClick={toggleLanguage}
              className="bg-yellow-400 text-black px-3 py-1 rounded-md font-semibold hover:bg-yellow-300 transition ml-4"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
          <NavLinks toggleMenu={toggleMenu} />
          {/* Language Toggle Button */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
