import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

function Planet({
  texture,
  speed = 0,
  size = 0,
  meshCustom = "standard",
  geoCustom = "sphere",
  innerRadius = 0,
  outerRadius = 0,
  rotation = [0, 0, 0],
  position,
}) {
  const mesh = useRef();

  useFrame((state) => {
    if (meshCustom === "sphere") {
      mesh.current.rotation.y += speed;
    }
  });

  let Material;
  switch (meshCustom) {
    case "standard":
      Material = "meshStandardMaterial";
      break;
    case "basic":
      Material = "meshBasicMaterial";
      break;
    default:
      Material = "meshStandardMaterial";
  }

  let Geometry;
  switch (geoCustom) {
    case "sphere":
      Geometry = "sphereGeometry";
      break;
    case "ring":
      Geometry = "ringGeometry";
      break;
    default:
      Geometry = "sphereGeometry";
  }


  return (
    <mesh
      position={[position, 0, position / 2]}
      ref={mesh}
      scale={1}
      visible
      castShadow
      rotation={rotation}
    >
      <Geometry
        args={
          geoCustom === "sphere"
            ? [size, 32, 32]
            : [innerRadius, outerRadius, 32]
        }
        side={THREE.DoubleSide}
      />
      <Material map={texture} />
    </mesh>
  );
}

export default Planet;
