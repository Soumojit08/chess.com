import { useState } from "react";
import { Menu, X, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar (Visible always) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-transparent mix-blend-difference text-white">
        <h1 className="uppercase text-2xl font-mono">ROOK</h1>

        {/* Menu Trigger Button */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full transition-colors duration-300 cursor-pointer hover:text-silver focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian flex flex-col justify-center items-start transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 text-white hover:text-silver transition-transform duration-300 cursor-pointer focus:outline-none"
          aria-label="Close Menu"
        >
          <X size={40} />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="group relative overflow-hidden"
            >
              <span className="uppercase text-9xl font-mono font-bold tracking-tighter text-muted-foreground transition-colors duration-500 group-hover:text-white">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
