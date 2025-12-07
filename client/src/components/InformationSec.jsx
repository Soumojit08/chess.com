import chessPiece from "../assets/chess pieces sec.jpg";

const InformationSec = () => {
  return (
    <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between py-24 px-8 md:px-24 bg-obsidian text-white">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0">
        <div className="relative w-full max-w-md aspect-3/4 overflow-hidden">
          {/* Using the existing image, but applying grayscale/filter to match the vibe if needed */}
          <img
            src={chessPiece}
            alt="Chess Pieces"
            className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center">
        <h2 className="type-h2 text-white mb-6">SIMPLE. ELEGANT. EXCLUSIVE.</h2>
        <p className="type-body mb-12 max-w-lg">
          The circle to square chess set is designed in a spirit of simplicity.
          Smoothly shaped figures appear elegantly on the chess board that gives
          a sense of solid ground. The figures appear elegantly on the chess
          board at ryeerho ore onsh exclusiveness of the finest materials.
        </p>

        {/* The Details List */}
        <div className="mt-4">
          <h3 className="type-h2 text-sm tracking-[0.2em] mb-6 text-silver">
            THE DETAILS
          </h3>
          <ul className="space-y-3 type-body text-sm">
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Luxury chess set showcase
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Hand-carved walnut
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Eco-friendly materials
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Solid weighted bases
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Unique patterns
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Impact resistant
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-silver rounded-full"></span>
              Handcrafted in United States
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InformationSec;
