import MagicBento from "./MagicBento";

const GallerySec = () => {
  return (
    <section className="w-full py-12 px-8 md:px-24 bg-white text-black">
      <h2 className="text-2xl font-mono tracking-widest mb-8 text-black">
        THE GALLERY
      </h2>

      <div className="w-full h-auto flex justify-center items-center">
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={false}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={50}
          particleCount={8}
          glowColor="255, 255, 255"
        />
      </div>
    </section>
  );
};

export default GallerySec;
