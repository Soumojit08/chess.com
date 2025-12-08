import chessPiece from "../assets/chess pieces sec.jpg";

const InformationSec = () => {
  return (
    <section className="w-full min-h-[60vh] flex flex-col lg:flex-row items-center justify-between  bg-obsidian text-white ">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex">
        <div className="relative w-full overflow-hidden">
          <img
            src={chessPiece}
            alt="Chess Pieces"
            className="object-cover w-full h-full transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 py-12 lg:py-0">
        <div className="flex flex-col">
          <h2 className="text-3xl mb-4 font-mono text-white">
            SIMPLE. ELEGANT. EXCLUSIVE.
          </h2>
          <p className="text-sm max-w-md text-muted-foreground">
            The circle to square chess set is designed in a spirit of
            simplicity. Smoothly shaped figures appear elegantly on the chess
            board that gives a sense of solid ground. The figures appear
            elegantly on the chess board at ryeerho ore onsh exclusiveness of
            the finest materials.
          </p>

          {/* The Details List */}
          <div className="mt-4">
            <h3 className="text-2xl font-mono tracking-widest mb-4 text-white">
              THE DETAILS
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
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
      </div>
    </section>
  );
};

export default InformationSec;
