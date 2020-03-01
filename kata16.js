const blocksAway = function (directions) {

  // define final location object to be returned
  let currentBlock = {
    east: 0,
    north: 0,
  };

  // if isOnYAxis is set true, it's either moving north or south. If false, east or west.
  // if directionMultiplier is set to 1, it's moving towards X/Y direction. If set to -1, moving away from that direction
  // ie) isOnYAxis === false, directionMultipler === -1 means it's moving along Y axis and moving in negative value: moving towards South
  let isOnYAxis = true;
  let directionMultiplier = 1;

  const north = {
    isOnYAxis: true,
    directionMultiplier: 1
  }

  const south = {
    isOnYAxis: true,
    directionMultiplier: -1
  }

  const east = {
    isOnYAxis: false,
    directionMultiplier: 1
  }

  const west = {
    isOnYAxis: false,
    directionMultiplier: -1
  }

  // loop through the array of given directions. 
  // take direction string @i and the number of movement @i+1. Increment by 2. 
  for (i = 0; i < directions.length; i += 2) {

    // if given direction is right, set the properties of the direction so it makes a 'turn' and moves accordingly.
    if (directions[i] === "right") {

      if (isOnYAxis === north.isOnYAxis && directionMultiplier === north.directionMultiplier) {
        isOnYAxis = false;
        directionMultiplier = 1;

      } else if (isOnYAxis === south.isOnYAxis && directionMultiplier === south.directionMultiplier) {
        isOnYAxis = false;
        directionMultiplier = -1;

      } else if (isOnYAxis === west.isOnYAxis && directionMultiplier === west.directionMultiplier) {
        isOnYAxis = true;
        directionMultiplier = 1;

      } else if (isOnYAxis === east.isOnYAxis && directionMultiplier === east.directionMultiplier) {
        isOnYAxis = true;
        directionMultiplier = -1;

      }

    } else if (directions[i] === "left") {

      // it seems like the expected output suggests that moving 'left' from origin point (0, 0) is moving towards north.
      // Which it is only reasonable that the starting direction before making any turn is actually North-East, not North or East.
      // This sets the default direction before first turn towards east if the given direction is "left".
      // Which it will make the taxi move towards North for the first direction.
      if (i === 0) {
        isOnYAxis = false;
        directionMultiplier = 1;
      }

      if (isOnYAxis === north.isOnYAxis && directionMultiplier === north.directionMultiplier) {
        isOnYAxis = false;
        directionMultiplier = -1;

      } else if (isOnYAxis === south.isOnYAxis && directionMultiplier === south.directionMultiplier) {
        isOnYAxis = false;
        directionMultiplier = 1;

      } else if (isOnYAxis === west.isOnYAxis && directionMultiplier === west.directionMultiplier) {
        isOnYAxis = true;
        directionMultiplier = -1;

      } else if (isOnYAxis === east.isOnYAxis && directionMultiplier === east.directionMultiplier) {
        isOnYAxis = true;
        directionMultiplier = 1;

      }
    }

    // isOnYAxis === true means moving along south or north. Add any movement to Y coordinate @currentBlock.north 
    if (isOnYAxis === true) {
      // multiply movement number by multiplier (west or east) and add it to current Y-axis location @currentBlock.north
      currentBlock.north += (directions[i + 1] * directionMultiplier);

      // isOnYAxis != true means it's moving along east or west (X-axis).
    } else if (isOnYAxis === false) {
      // calculate the value to be added to current X-axis location.
      currentBlock.east += (directions[i + 1] * directionMultiplier);

    }

  }

  // return current location
  return currentBlock;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));