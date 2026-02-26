import Logo from "./ui/Logo";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full min-h-40 py-12 px-8 md:px-24 bg-charcoal text-white flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Logo />
        <p className="text-sm text-silver">soumojitbanerjee08@gmail.com</p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex space-x-4 uppercase text-white">
          <Link
            to="/instagram"
            className="hover:text-platinum transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            to="/github"
            className="hover:text-platinum transition-colors duration-300"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            to="/linkedin"
            className="hover:text-platinum transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <p className="text-sm text-silver">All rights reserved &copy; 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
