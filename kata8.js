const multiplicationTable = function(maxValue) {
  
  // empty string to store new string
  let str = "";

  // loop to set the column size
  for (i = 1; i <= maxValue; i++){
    // loop to set the row size
    for (j = 1; j <= maxValue; j++){
      // multiply i by j to give the multiplication value
      str += i*j;
      // set a space between numbers
      str += " ";
    }
    // after going through a row, set a newline to move onto next multiplication row
    str += "\n";
  }

  // return string built
  return str;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));