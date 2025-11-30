import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/chess.glb");
  return <primitive object={scene} {...props} />;
}

const CanvasElem = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "absolute" }}
    >
      <PresentationControls
        rotation={[0,0,0]}
        damping={0.2}
        // speed={1.5}
        // global
      >
        <Stage environment={null}>
          <Model />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default CanvasElem;
