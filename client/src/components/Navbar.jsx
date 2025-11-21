import { Link } from "react-router-dom";
import { FaChessPawn } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="h-full w-1/7 bg-primary-foreground text-foreground flex flex-col items-start py-12 px-6 gap-10">
      <div className="logo flex ">
        <h1 className="tracking-widest font-extrabold text-3xl heading flex items-end justify-end ">
          <span>
            <FaChessPawn size={36} />
          </span>
          ChessMaster
        </h1>
      </div>

      <div className="menu flex flex-col">
        <ul>
          <li>
            <Link to="/play">Play</Link>
          </li>
          <li>
            <Link to="/watch">Watch</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="actions flex flex-col gap-2">
        <Button variant="outline">Login</Button>
        <Button>Signup</Button>
        <Button variant="secondary" className="Toggle">
          Dark Mode
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
