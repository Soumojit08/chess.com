import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-full w-1/4 bg-primary-foreground text-foreground flex flex-col items-start">
      <div className="logo flex ">Chess Master</div>

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
