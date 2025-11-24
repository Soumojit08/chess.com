import CardNav from "./CardNav";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#E5E5E5",
      textColor: "#121212",
      links: [
        { label: "The Philosophy", href: "/philosophy" },
        { label: "Grandmasters", href: "/grandmasters" },
        { label: "Engine Architecture", href: "/engine" },
      ],
    },
    {
      label: "Tournaments",
      bgColor: "#E5E5E5",
      textColor: "#121212",
      links: [
        { label: "Live Matches", href: "/live" },
        { label: "Global Rankings", href: "/rankings" },
        { label: "Archives", href: "/archives" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#E5E5E5",
      textColor: "#121212",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      items={items}
      baseColor="transparent"
      menuColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
