import { Button } from "@/components/ui/button";
import CanvasElem from "../components/CanvasElem";
import InformationSec from "../components/InformationSec";
import PiecesSec from "../components/PiecesSec";
import GallerySec from "../components/GallerySec";
import ContactSec from "../components/ContactSec";
import Footer from "../components/Footer";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="min-h-screen bg-obsidian text-white flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Content Overlay */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 pointer-events-none">
          <h1 className="font-mono uppercase text-center text-2xl">
            Circle to Square
          </h1>
          <p className="font-mono text-silver text-center uppercase md:text-base text-xs tracking-widest mb-2">
            simple. elegant. beautiful.
          </p>

          <Button
            variant="outline"
            className="cursor-pointer pointer-events-auto hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest"
            onClick={handleClick}
          >
            Get Started
          </Button>
        </div>

        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-10">
          <CanvasElem />
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="relative z-30 bg-obsidian">
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
