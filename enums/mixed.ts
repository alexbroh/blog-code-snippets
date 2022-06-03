/* eslint-disable @typescript-eslint/no-unused-vars */
export {};

enum CompassDirection {
  North = 'North',
  East = 'East',
  South = 180,
  West = 270,
}

function move(direction: CompassDirection) {
  return 'moved successfully!';
}

move(999); // moved successfully! (whoops)
const b = CompassDirection[999]; // no error! type of b is string. (whoops)
