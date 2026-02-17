import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import LightRays from "@/components/LightRays";
import img from "../assets/chess_cutout.webp";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-wrap font-sans pt-15">
      <div className="w-full flex h-[65%] p-2 pb-1 gap-2">
        {/* name and image  */}
        <section className="w-[50%] relative flex flex-col items-center justify-start">
          <div className="absolute inset-0 z-0">
            <LightRays
              raysOrigin="top"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.3}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.3}
              distortion={0.1}
              className="custom-rays"
              pulsating={false}
              fadeDistance={0.7}
              saturation={1}
            />
          </div>
          <img
            src={img}
            className="relative z-10 w-3/4 object-contain filter contrast-125 brightness-75"
          />
          <div className=" p-8 w-full flex items-center justify-around gap-3">
            <Button variant="customSmall" size="customSmall">
              Score : 1000
            </Button>
            <Button variant="customSmall" size="customSmall">
              New Game
            </Button>
            <Button variant="customSmall" size="customSmall">
              Game History
            </Button>
          </div>
        </section>

        {/* analysis area */}
        <section className="border-red-700 border-2 w-[50%] flex gap-2 p-2">
          {/* Left column - 3 equal rows */}
          <div className="w-[35%] flex flex-col gap-2">
            <div className="border-red-700 border-2 flex-1"></div>
            <div className="border-red-700 border-2 flex-1"></div>
            <div className="border-red-700 border-2 flex-1"></div>
          </div>
          {/* Right column - 2 rows (top smaller, bottom larger) */}
          <div className="w-[65%] flex flex-col gap-2">
            <div className="border-red-700 border-2 h-[40%]"></div>
            <div className="border-red-700 border-2 flex-1"></div>
          </div>
        </section>
      </div>
      <div className="w-full flex h-[35%] p-2 pt-1 gap-2">
        <section className="border-red-700 border-2 w-[25%]"></section>
        <section className="border-red-700 border-2 w-[25%]"></section>
        <section className="border-red-700 border-2 w-[25%]"></section>
        <section className="border-red-700 border-2 w-[25%]"></section>
      </div>
    </div>
  );
};

export default Dashboard;
