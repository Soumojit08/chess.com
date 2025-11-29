import { Suspense } from "react";
import { Canvas, useLoader, extend, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import chessModel from "../assets/futuristic_chess_set_design.glb";

// Register OrbitControls so it can be used as a JSX element
extend({ OrbitControls });

const CameraController = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} enableDamping />;
};

const Model = () => {
  const gltf = useLoader(GLTFLoader, chessModel);
  return <primitive object={gltf.scene} />;
};

const CanvasElem = () => {
  return (
    <div className="h-screen w-full bg-[#1a1a1a]">
      <Canvas camera={{ position: [0, 5, 10], fov: 45}}>
        {/* Basic Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <CameraController />
      </Canvas>
    </div>
  );
};

export default CanvasElem;
