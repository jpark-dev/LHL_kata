const squareCode = function (message) {

  // string variable to store the string after removing spaces
  let newMsg = "";
  let returnMsg = "";

  // @newMsg now stores the message without empty spaces
  for (i = 0; i < message.length; i++) {
    if (message[i] !== " ") {
      newMsg += message[i];
    }
  }

  // define unchangeable variables that stores the width/height of given message
  const newMsgLength = newMsg.length;
  const rootValue = Math.sqrt(newMsgLength);
  const colWidth = Math.ceil(rootValue);
  const rowWidth = Math.ceil((newMsgLength / colWidth));

  // define an array for processing
  let textArrayOne = [];

  // defie start index and end index of the array box to be created
  let colStartIndex = 0;
  let colEndIndex = colWidth;

  // loop through the characters of the row
  for (i = 0; i < rowWidth; i++) {
    // define string table to be used as columns in an array
    let colStr = "";

    // loop through column and store values in @colStr
    for (j = colStartIndex; j < colEndIndex; j++) {
      colStr += newMsg[j];

    }

    // start index of column increases by the width of the column
    colStartIndex += colWidth;

    // if the length of the given msg is smaller than (start index + col width)
    if (newMsgLength < (colStartIndex + colWidth)) {
      // increase the end index by the required amount (if length of last column is 2 instead of 3, increase end index by 2)
      colEndIndex += (colWidth - (colWidth * rowWidth - newMsgLength));

      // otherwise, increase the end index by the width of the column
    } else {
      colEndIndex += colWidth;
    }

    // push the built string to @textArrayOne
    textArrayOne.push(colStr);
  }

  // loop through @textArrayOne to create the string to be returned
  for (i = 0; i < textArrayOne[0].length; i++) {

    // loop through @textArrayOne
    for (j = 0; j < textArrayOne.length; j++) {

      // if current character of @textArrayOne is undefined, skip. If not, add current character to @colStrTwo 
      if (textArrayOne[j][i] === undefined) {
        returnMsg += "";

      } else if (textArrayOne[j][i] != undefined) {
        returnMsg += textArrayOne[j][i];

      }

    }

    // enter an empty space between strings
    returnMsg += " ";

  }

  // return created string @returnMsg 
  return returnMsg;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));