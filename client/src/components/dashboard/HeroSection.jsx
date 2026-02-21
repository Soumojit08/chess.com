import LightRays from "@/components/shared/LightRays";
import { Button } from "@/components/ui/button";
import img from "../../assets/chess_cutout.webp";

const HeroSection = () => {
  return (
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
        <div className="text-3xl">ELO : 1457</div>
        <Button variant="customCovered" size="customSmall">
          [ New Game ]
        </Button>
        <Button variant="customSmall" size="customSmall">
          [ Game History ]
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
