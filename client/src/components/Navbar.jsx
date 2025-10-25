import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary-foreground text-foreground ">
      <div className="logo">Chess Master</div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/play">play</Link>
          </li>
          <li>
            <Link to="/watch">Watch</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="actions">
        <button>Login</button>
        <button>Signup</button>
        <button className="Toggle">Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
