import { Link } from "react-scroll";

interface NavLinksProps {
  toggleMenu?: () => void; // Optional, for closing mobile menu on click
}

const NavLinks = ({ toggleMenu }: NavLinksProps) => {
  const navItems = [
    { name: "Reconocimientos", id: "awards" },
    { name: "Biografía", id: "bio" },
    { name: "Diseño Sonoro", id: "sound-design" },
    { name: "Discografía", id: "discography" },
    { name: "Publicidad", id: "advertising" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-6 text-lg">
      {navItems.map(({ name, id }) => (
        <li key={id}>
          <Link
            to={id}
            smooth={true}
            duration={600}
            offset={-80} // Adjust for navbar height
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={toggleMenu} // Closes menu on mobile
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
