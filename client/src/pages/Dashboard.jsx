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
        <section className="border-red-700 border-2 w-[50%] relative p-2">
          <div className="w-[34%] h-full absolute left-0 top-0 border-red-700 border-2">
            
          </div>
          <div className="w-[64%] h-full absolute right-0 top-0 border-red-700 border-2"></div>
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
