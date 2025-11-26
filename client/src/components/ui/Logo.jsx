import { SiLichess } from "react-icons/si";

const Logo = () => {
  return (
    <span className="flex items-center gap-1 text-2xl">
      <SiLichess />
      <h1 className="uppercase font-mono font-light tracking-wider">ROOK</h1>
    </span>
  );
};

export default Logo;
