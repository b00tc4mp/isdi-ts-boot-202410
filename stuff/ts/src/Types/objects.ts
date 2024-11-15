//Type Aliases

type Point = {
  x: number;
  y: number;
};

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
let coordinate: Point = {
  x: 34,
  y: 2,
};

// function getRandomCoordinate(): { x: number; y: number } {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// }

function getRandomCoordinate(): Point {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}

// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return {
//     x: point.x * 2,
//     y: point.y * 2,
//   };
// }

function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

console.log("getRandomCoordinate() :>> ", getRandomCoordinate());

//Intersection Type
// We can mix types in order to make a new type. ex => Karate + Box = Ufc
type Karate = {
  strength: number;
};

type Box = {
  velocity: number;
};

type Ufc = Karate & Box;

const ufcFighter: Ufc = {
  strength: 9,
  velocity: 10,
};

console.log("ufcFighter :>> ", ufcFighter);
