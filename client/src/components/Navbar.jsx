import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SignedIn, SignOutButton, SignedOut } from "@clerk/clerk-react";

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
        <Logo />

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
        className={`fixed inset-0 z-50 bg-obsidian flex justify-between items-center px-10 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
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
              className="group relative flex items-center gap-4 overflow-hidden"
            >
              <div className="h-4 w-4 bg-muted-foreground md:h-8 md:w-8 lg:h-8 lg:w-8"></div>
              <span className="uppercase text-5xl font-mono font-bold tracking-tighter text-muted-foreground transition-colors duration-500 group-hover:text-white md:text-9xl lg:text-9xl">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4 text-right uppercase text-silver">
          <Link
            to="https://www.instagram.com/soumojit___08/"
            target="_blank"
            onClick={toggleMenu}
            className=" hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </Link>
          <Link
            to="https://github.com/Soumojit08"
            target="_blank"
            onClick={toggleMenu}
            className=" hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/soumojit-banerjee"
            target="_blank"
            onClick={toggleMenu}
            className=" hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </Link>
          <SignedIn>
            <SignOutButton>
              <button title="Logout" className=" hover:text-white transition-colors duration-300 cursor-pointer">
                <RiLogoutCircleLine size={28} />
              </button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <Link to="/login" title="Login">
              <button
                onClick={toggleMenu}
                className=" hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <AiOutlineLogin size={28} />
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </>
  );
};

export default Navbar;
