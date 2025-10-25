import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Chess.com</div>

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

      <div className="user"></div>
    </nav>
  );
};

export default Navbar;
