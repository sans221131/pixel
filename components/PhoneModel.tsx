"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FC, useRef } from "react";
import { Group } from "three";

const Phone: FC = () => {
  const { scene } = useGLTF("/model/phone.glb") as { scene: Group };
  const phoneRef = useRef<Group>(null);

  return (
    <group ref={phoneRef} position={[0, -1.5, 0]}>
      <primitive object={scene} scale={[15, 15, 15]} />
    </group>
  );
};

const PhoneModel: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "250px", // fixed height like you asked
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "700px" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <Phone />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default PhoneModel;
