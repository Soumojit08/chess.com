import { Button } from "@/components/ui/button";
import CanvasElem from "../components/CanvasElem";
import InformationSec from "../components/InformationSec";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="min-h-screen bg-obsidian text-white position-relative flex flex-col">
      <div className="absolute flex-1 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <h1 className="text-xl font-bold font-sans uppercase md:text-4xl text-center">
          Circle to Square
        </h1>
        <p className="font-mono text-muted-foreground text-center uppercase md:text-xl text-xs">
          simple.elegant.beautiful.
        </p>

        <Button
          variant="outline"
          className="mt-2 cursor-pointer"
          onClick={handleClick}
        >
          Get Started
        </Button>
      </div>
      <div className="flex-2">
        <CanvasElem />
      </div>
      <div className="order-3">

      <InformationSec />
      </div>
    </div>
  );
};

export default Home;
