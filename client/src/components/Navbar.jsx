import { Link } from "react-router-dom";
import {Chess} from "lucide-react"

const Navbar = () => {
  return (
    <nav className="h-full w-1/7 bg-primary-foreground text-foreground flex flex-col items-start py-12 px-6 gap-10">
      <div className="logo flex ">
        <h1 className="tracking-widest font-extrabold text-2xl heading">ChessMaster</h1>
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

      <div className="actions flex flex-col">
        <button>Login</button>
        <button>Signup</button>
        <button className="Toggle">Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
