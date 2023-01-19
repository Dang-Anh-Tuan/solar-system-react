import { useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import useLoadPlanet from "../hook/useLoadPlanet";
import Planet from "./Planet";
import SystemPlanet from "./SystemPlanet";

function ContainerPlanet() {
  const [fov, setFov] = useState(20);
  const planets = useLoadPlanet();

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-50, 140, 140);
  }, [camera]);

  useEffect(() => {
    camera.fov = fov;
  }, [fov]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setFov((preState) => (preState += 0.3));
  //   }, 100);

  //   return () => clearInterval(timer);
  // }, []);

  // change background by texture
  const starTexture = new THREE.CubeTextureLoader()
    .setPath("textures/")
    .load([
      "stars.jpg",
      "stars.jpg",
      "stars.jpg",
      "stars.jpg",
      "stars.jpg",
      "stars.jpg",
    ]);
  const { scene } = useThree();

  useEffect(() => {
    scene.background = starTexture;
  }, [starTexture]);

  return (
    <>
      {planets &&
        planets.map((planet) => (
          <SystemPlanet key={planet.id} speed={planet.speed}>
            <Planet
              texture={planet.texture}
              position={planet.position}
              speed={planet.speedRouteAround}
              size={planet.size}
              meshCustom={planet.meshCustom}
              innerRadius={planet.innerRadius}
              outerRadius={planet.outerRadius}
              geoCustom={planet.geoCustom}
              rotation={planet.rotation}
            ></Planet>
            {planet.satellite &&
              planet.satellite.map((item) => (
                <SystemPlanet
                  position={planet.position}
                  key={item.id}
                  speed={item.speed}
                >
                  <Planet
                    texture={item.texture}
                    position={item.position}
                    speed={item.speedRouteAround}
                    size={item.size}
                    meshCustom={item.meshCustom}
                    innerRadius={item.innerRadius}
                    outerRadius={item.outerRadius}
                    geoCustom={item.geoCustom}
                    rotation={item.rotation}
                  ></Planet>
                </SystemPlanet>
              ))}
          </SystemPlanet>
        ))}
    </>
  );
}

export default ContainerPlanet;
