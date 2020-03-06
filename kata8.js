const multiplicationTable = function(maxValue) {
  let str = "";

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      str += i * j;
      str += " ";
    }
    // after going through a row, set a newline to move onto next multiplication row
    str += "\n";
  }
  return str;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));