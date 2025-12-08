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
      <h2 className="text-2xl font-mono tracking-widest mb-4 text-black">
        THE PIECES
      </h2>
    </section>
  );
};

export default PiecesSec;
