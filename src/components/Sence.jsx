import {
  OrbitControls,
  PerspectiveCamera,
  PivotControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import ContainerPlanet from "./ContainerPlanet";
import Planet from "./Planet";

function Sence() {
  const [fov, setFov] = useState(20);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setFov((preState) => (preState += 0.3));
  //   }, 100);

  //   return () => clearInterval(timer);
  // }, []);
  const refCamera = useRef();

  useEffect(() => {
    if (refCamera.current) {
      console.log(refCamera);
      refCamera.current.position.set(-50, 140, 140);
      refCamera.current.fov = 60;
    }
  }, []);

  return (
    <Canvas className="fullScreen" style={{ backgroundColor: "black" }}>
      <PerspectiveCamera ref={refCamera} /> 
      <OrbitControls />
      <PivotControls
        scale={1}
        offset={[0, 0, 0]}
        rotation={[0, 0, 0]}
        anchor={[1000, 1000, 1000]}
        fixed
        lineWidth={2}
      />
      <pointLight color={"white"} intensity={3} distance={1000} />
      <Planet position={[0, 0, 0]}></Planet>
      <ContainerPlanet />
    </Canvas>
  );
}

export default Sence;
