import { Button } from "@/components/ui/button";
import InformationSec from "../components/InformationSec";
import PiecesSec from "../components/PiecesSec";
import GallerySec from "../components/GallerySec";
import ContactSec from "../components/ContactSec";
import Footer from "../components/Footer";
import allPiece from "../assets/home page.webp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-24 md:pb-32">
        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="font-mono text-silver text-xs md:text-sm tracking-[0.4em] uppercase mt-10 mb-8 drop-shadow-md">
            simple. elegant. beautiful.
          </p>

          <Button
            className="bg-transparent border border-white text-white hover:bg-white cursor-pointer hover:text-black transition-all duration-300 uppercase tracking-[0.15em] px-10 py-6 text-sm md:text-base rounded-none backdrop-blur-[2px]"
            onClick={handleClick}
          >
            {isAuthenticated ? "Go to Dashboard" : "Get Started"}
          </Button>
        </div>

        {/* Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10"></div>
          <img
            src={allPiece}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="relative z-30 bg-background">
        <InformationSec />
        <PiecesSec />
        <GallerySec />
        <ContactSec />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
