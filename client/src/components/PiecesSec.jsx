import React from "react";

const pieces = [
  {
    name: "KING",
    description:
      "The King is the most important piece in the game of chess. If the King is trapped, the game is over.",
    image: null,
  },
  {
    name: "QUEEN",
    description:
      "The Queen is the most powerful piece. She can move in any direction as far as she wants.",
    image: null,
  },
  {
    name: "BISHOP",
    description:
      "The Bishop moves diagonally. Each player starts with two bishops, one on a light square and one on a dark square.",
    image: null,
  },
  {
    name: "KNIGHT",
    description:
      "The Knight moves in an L-shape. It is the only piece that can jump over other pieces.",
    image: null,
  },
  {
    name: "ROOK",
    description:
      "The Rook moves horizontally or vertically. It is a powerful piece, especially in the endgame.",
    image: null,
  },
  {
    name: "PAWN",
    description:
      "The Pawn moves forward one square, but captures diagonally. It has unique moves like en passant and promotion.",
    image: null,
  },
];

const PiecesSec = () => {
  return (
    <section className="w-full py-24 px-8 md:px-24 bg-white text-black">
      <h2 className="type-h2 text-black mb-16">THE PIECES</h2>

      {/* Pieces Row - Placeholder for the top image row */}
      <div className="flex justify-between items-end mb-24 overflow-x-auto pb-8 gap-8">
        {/* Since we don't have individual piece images, we'll create stylized placeholders or use a single image if available. 
             For now, let's create a visual representation using CSS or SVG if possible, or just placeholders.
             Given the "inspiration", it's a clean row of 3D renders. 
             I'll use a simple text/icon placeholder for now to keep the layout structure. 
         */}
        {pieces.map((piece, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[100px] opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
          >
            <div className="h-32 w-16 bg-gray-200 rounded-t-full mb-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out flex items-center justify-center text-xs text-gray-400">
              {/* Placeholder for 3D render */}
              IMG
            </div>
          </div>
        ))}
      </div>

      {/* Grid of Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {pieces.map((piece, idx) => (
          <div
            key={idx}
            className="bg-obsidian text-white p-8 flex flex-col md:flex-row items-center gap-8 group hover:bg-black transition-colors duration-500"
          >
            {/* Image Placeholder */}
            <div className="w-24 h-48 bg-gray-800 shrink-0 flex items-center justify-center text-gray-500">
              {/* Placeholder for individual piece render */}
              {piece.name[0]}
            </div>

            <div className="flex flex-col text-center md:text-left">
              <h3 className="type-h2 text-white text-lg mb-2">{piece.name}</h3>
              <p className="type-body text-gray-400 text-xs leading-relaxed">
                {piece.description}
              </p>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-gray-500">
                Dimensions <br />
                <span className="text-white">Height: 95mm / Base: 35mm</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PiecesSec;
