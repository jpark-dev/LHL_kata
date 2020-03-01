let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard(whiteQueen, blackQueen) {

  // define an empty array of board
  let board = [];

  // loop from 0 - 7
  for (i = 0; i < 8; i++) {

    // create an empty newRow array 
    let newRow = [];

    for (j = 0; j < 8; j++) {

      // push 1 at the given coordinate of whiteQueen
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        newRow.push(1);

        // pudh 1 at the given coordinate of blackQueen
      } else if (i === blackQueen[0] && j === blackQueen[1]) {
        newRow.push(1);

        // otherwise, push 0 
      } else {
        newRow.push(0);

      }
    }
    // push created array of row to the board
    board.push(newRow);
  }

  return board;
}

// create function @queenThreat
function queenThreat(board) {

  // boolean to check if queens can attack each other
  let isAttackable = false;

  // attackable horizontally or vertically if x or y coordinates of both stones are same  
  if (blackQueen[0] === whiteQueen[0] || blackQueen[1] === whiteQueen[1]) {
    isAttackable = true;

  }

  // to check diagnally, check all 4 diagnal directions from black Queen to see if white queen is place on any of the lanes

  // northeast -> +1 to x, -1 to y each move

  let j = blackQueen[1];

  // loop start with i+1 or i-1, to start checking from the next diagnal box. 
  //ie) if blackQueen is at 1,1, loop starts from 2,2. 
  //This can be avoided by adding if statement to cross out current coordinate of blackQueen.
  for (i = blackQueen[0] + 1; i < board.length; i++) {

    if (j <= 0) {
      break;

    } else if (i === board.length - 1) {
      break;

    } else {
      j--;

    }

    if (i === whiteQueen[0] && j === whiteQueen[1]) {

      isAttackable = true;

    }

  }

  // northwest ->  -1 to x, +1 to y 
  j = blackQueen[1];

  for (i = blackQueen[0] - 1; i >= 0; i--) {

    if (i <= 0) {
      break;

    } else if (j === board.length - 1) {
      break;

    } else {
      j++;

    }

    if (i === whiteQueen[0] && j === whiteQueen[1]) {

      isAttackable = true;

    }

  }
  // southwest ->  -1 to x, -1 to y 
  j = blackQueen[1];

  for (i = blackQueen[0] - 1; i >= 0; i--) {

    if (i <= 0) {
      break;

    } else if (j <= 0) {
      break;

    } else {
      j++;

    }

    if (i === whiteQueen[0] && j === whiteQueen[1]) {

      isAttackable = true;

    }

  }
  // southeast ->  +1 to x, +1 to y 
  j = blackQueen[1];

  for (i = blackQueen[0] + 1; i >= 0; i++) {

    if (i === board.length - 1) {
      break;

    } else if (j === board.length - 1) {
      break;

    } else {
      j++;

    }

    if (i === whiteQueen[0] && j === whiteQueen[1]) {

      isAttackable = true;

    }

  }

  return isAttackable;
}

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


