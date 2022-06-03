/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
export {};

enum CompassDirection {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}

function move(direction: CompassDirection) {
  return 'moved successfully!';
}

move(999); // Error. Argument of type '999' is not assignable to parameter of type 'CompassDirection'.
const b = CompassDirection[999]; // Error. Element implicitly has an 'any' type because expression of type '999' can't be used to index type 'typeof CompassDirection'.
