enum CompassDirection {
    North,
    East,
    South,
    West,
  }
  
  function move(direction: CompassDirection)  {
    return 'moved successfully!';
  }
  
  move(CompassDirection.North); // moved successfully!
  move(CompassDirection.South); // moved successfully!
  move(999); // moved successfully! (uhm.. no error?!)