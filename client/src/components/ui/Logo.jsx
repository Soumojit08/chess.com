import { SiLichess } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className="flex items-center gap-1 text-2xl">
        <SiLichess />
        <h1 className="uppercase font-mono font-light tracking-wider">ROOK</h1>
      </span>
    </Link>
  );
};

export default Logo;
