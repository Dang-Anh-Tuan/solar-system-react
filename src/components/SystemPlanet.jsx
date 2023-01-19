import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function SystemPlanet({ position = 0, speed = 0, children }) {
  const refSystem = useRef();

  useFrame((state) => (refSystem.current.rotation.y += speed));

  return (
    <group ref={refSystem} position={[position, 0, position / 2]}>
      {children}
    </group>
  );
}

export default SystemPlanet;
