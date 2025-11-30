import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";

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
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "10",
      }}
    >
      <Stage environment={null} shadows={"accumulative"} adjustCamera={0.9}>
        {/* Rotation is [x, y, z] in radians. Math.PI / 4 is 45 degrees. */}
        <Model rotation={[0, -Math.PI / 4, 0]} />
      </Stage>
    </Canvas>
  );
};

export default CanvasElem;
