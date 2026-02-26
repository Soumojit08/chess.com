import LightRays from "@/components/shared/LightRays";
import { Button } from "@/components/ui/button";
import img from "../../assets/chess_cutout.webp";

const HeroSection = () => {
  return (
    <section className="relative flex w-full min-w-0 flex-col items-center justify-start overflow-hidden rounded-lg border border-zinc-800/50 lg:rounded-none lg:border-0">
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
        className="relative z-10 w-2/3 max-w-sm object-contain pt-6 filter contrast-125 brightness-75 md:w-1/2 lg:w-3/4"
      />
      <div className="relative z-10 grid w-full grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:flex lg:items-center lg:justify-around lg:gap-3 lg:p-8">
        <div className="text-center text-2xl md:col-span-2 lg:col-span-1 lg:text-left lg:text-3xl">
          ELO : 1457
        </div>
        <Button
          variant="customCovered"
          size="customSmall"
          className="w-full md:w-auto"
        >
          [ New Game ]
        </Button>
        <Button
          variant="customSmall"
          size="customSmall"
          className="w-full md:w-auto"
        >
          [ Game History ]
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
