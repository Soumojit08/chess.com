import piece from "../assets/chess pieces sec.jpg";

const pieces = [
  {
    name: "KING",
    description:
      "The King is the most important piece in the game of chess. If the King is trapped, the game is over.",
    image: null,
    dimensions: {
      title: "DIMENSIONS",
      height: "10cm",
      base: "4.2cm",
    },
  },
  {
    name: "QUEEN",
    description:
      "The Queen is the most powerful piece. She can move in any direction as far as she wants.",
    image: null,
    dimensions: {
      title: "DIMENSIONS",
      height: "10cm",
      base: "4.2cm",
    },
  },
  {
    name: "BISHOP",
    description:
      "The Bishop moves diagonally. Each player starts with two bishops, one on a light and one on a dark square.",
    image: null,
    dimensions: {
      title: "DIMENSIONS",
      height: "10cm",
      base: "4.2cm",
    },
  },
  {
    name: "KNIGHT",
    description:
      "The Knight moves in an L-shape. It is the only piece that can jump over other pieces.",
    image: null,
    dimensions: {
      title: "DIMENSIONS",
      height: "10cm",
      base: "4.2cm",
    },
  },
  {
    name: "ROOK",
    description:
      "The Rook moves horizontally or vertically. It is a powerful piece, especially in the endgame.",
    image: null,
    dimensions: {
      title: "DIMENSIONS",
      height: "10cm",
      base: "4.2cm",
    },
  },
  {
    name: "PAWN",
    description:
      "The Pawn moves forward one square, but captures diagonally. It has unique ability to promote",
    image: null,
    dimensions: {
      title: "DIMENSIONS",
      height: "10cm",
      base: "4.2cm",
    },
  },
];

const PiecesSec = () => {
  return (
    <section className="w-full py-12 px-8 md:px-24 bg-white text-black">
      <h2 className="text-2xl font-mono tracking-widest mb-6 text-black">
        THE PIECES
      </h2>

      <div className="flex flex-col items-center justify-center">
        <div className="image max-w-9xl flex justify-center">
          <img src={piece} className="w-full max-w-5xl object-contain " />
        </div>

        <div className="pieces mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 md:px-0">
          {pieces.map((piece, index) => (
            <div
              className="w-full h-88 md:h-80 bg-charcoal p-6 md:p-8 lg:p-12 flex flex-col justify-between cursor-pointer hover:scale-105 transition-all duration-300"
              key={index}
            >
              <h1 className="text-3xl md:text-4xl font-mono tracking-widest mb-2 md:mb-4 text-white">
                {piece.name}
              </h1>
              <p className="text-sm md:text-base text-platinum line-clamp-3">
                {piece.description}
              </p>
              <div>
                <h2 className="text-lg md:text-xl font-mono tracking-widest mb-2 md:mb-4 mt-2 text-white">
                  {piece.dimensions.title}
                </h2>
                <div className="flex gap-4">
                  <p className="text-sm md:text-base text-platinum">
                    Height : {piece.dimensions.height}
                  </p>
                  <p className="text-sm md:text-base text-platinum">
                    Base : {piece.dimensions.base}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PiecesSec;
