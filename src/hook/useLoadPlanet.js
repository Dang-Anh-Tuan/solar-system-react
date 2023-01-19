import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import constants from "../constants";

export default function () {
  const [
    starTexture,
    sunTexture,
    earthTexture,
    mercuryTexture,
    venusTexture,
    moonTexture,
    marsTexture,
    jupiterTexture,
    saturnTexture,
    saturnRingTexture,
    uranusTexture,
    neptuneTexture,
  ] = useLoader(TextureLoader, [
    "/textures/stars.jpg",
    "/textures/sun.jpg",
    "/textures/earth.jpg",
    "/textures/mercury.jpg",
    "/textures/venus.jpg",
    "/textures/moon.jpg",
    "/textures/mars.jpg",
    "/textures/jupiter.jpg",
    "/textures/saturn.jpg",
    "/textures/saturn_ring_alpha.png ",
    "/textures/uranus.jpg",
    "/textures/neptune.jpg",
  ]);

  return [
    {
      id: 1,
      texture: sunTexture,
      position: 0,
      size: constants.planets.SUN_RADIUS,
      speed: constants.planets.SUN_SELF_ROTATION,
      speedRouteAround: constants.planets.SUN_SELF_ROTATION,
      meshCustom: "basic",
    },
    {
      id: 2,
      texture: mercuryTexture,
      size: constants.planets.MERCURY_RADIUS,
      position: constants.planets.MERCURY_X,
      speed: constants.planets.MERCURY_MOVE,
      speedRouteAround: constants.planets.MERCURY_SELF_ROTATION,
    },
    {
      id: 3,
      texture: venusTexture,
      size: constants.planets.VENUS_RADIUS,
      position: constants.planets.VENUS_X,
      speed: constants.planets.VENUS_MOVE,
      speedRouteAround: constants.planets.VENUS_SELF_ROTATION,
    },
    {
      id: 4,
      texture: earthTexture,
      position: constants.planets.EARTH_X,
      size: constants.planets.EARTH_RADIUS,
      speed: constants.planets.EARTH_MOVE,
      speedRouteAround: constants.planets.EARTH_SELF_ROTATION,
      satellite: [
        {
          id: 5,
          texture: moonTexture,
          size: constants.planets.MOON_RADIUS,
          position: constants.planets.MOON_X,
          speed: constants.planets.MOON_MOVE,
          speedRouteAround: constants.planets.MOON_SELF_ROTATION,
        },
      ],
    },

    {
      id: 6,
      texture: marsTexture,
      position: constants.planets.MARS_X,
      size: constants.planets.MARS_RADIUS,
      speed: constants.planets.MARS_MOVE,
      speedRouteAround: constants.planets.MARS_SELF_ROTATION,
    },
    {
      id: 7,
      texture: jupiterTexture,
      position: constants.planets.JUPITER_X,
      size: constants.planets.JUPITER_RADIUS,
      speed: constants.planets.JUPITER_MOVE,
      speedRouteAround: constants.planets.JUPITER_SELF_ROTATION,
    },
    {
      id: 8,
      texture: saturnTexture,
      position: constants.planets.SATURN_X,
      size: constants.planets.SATURN_RADIUS,
      speed: constants.planets.SATURN_MOVE,
      speedRouteAround: constants.planets.SATURN_SELF_ROTATION,
      satellite: [
        {
          id: 9,
          geoCustom: "ring",
          texture: saturnRingTexture,
          meshCustom: "basic",
          size: 0.5,
          innerRadius: constants.planets.SATURN_RING_INNER_RADIUS,
          outerRadius: constants.planets.SATURN_RING_OUTER_RADIUS,
          position: 0,
          rotation: [-Math.PI / 2, 0, 0],
        },
      ],
    },

    {
      id: 10,
      texture: uranusTexture,
      position: constants.planets.URANUS_X,
      size: constants.planets.URANUS_RADIUS,
      speed: constants.planets.URANUS_MOVE,
      speedRouteAround: constants.planets.EARTH_SELF_ROTATION,
    },
    {
      id: 11,
      texture: neptuneTexture,
      position: constants.planets.NEPTUNE_X,
      size: constants.planets.NEPTUNE_RADIUS,
      speed: constants.planets.NEPTUNE_MOVE,
      speedRouteAround: constants.planets.NEPTUNE_SELF_ROTATION,
    },
  ];
}
