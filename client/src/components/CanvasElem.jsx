import { Canvas } from "@react-three/fiber";
import chess from "../assets/futuristic_chess_set_design.glb";

const CanvasElem = () => {
  return (
    <Canvas>
      <chess />
    </Canvas>
  );
};

export default CanvasElem;
