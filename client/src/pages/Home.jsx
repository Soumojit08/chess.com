import { Button } from "@/components/ui/button";
import CanvasElem from "../components/CanvasElem";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="h-screen bg-obsidian text-white position-relative ">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <h1 className="text-4xl font-bold font-sans uppercase">
          Circle to Square
        </h1>
        <p className="font-mono text-muted-foreground text-center uppercase ">
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
      <div className="block">
        <CanvasElem />
      </div>
    </div>
  );
};

export default Home;
