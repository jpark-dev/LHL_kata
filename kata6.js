const repeatNumbers = function(data) {
  
  //build an empty string to be manipulated
  let str = "";

  // loop outer array [[a, b], [c, d]]
  for (let i = 0; i < data.length; i++) {
    // loop inner array [a, b]
    for (let j = 0; j < data[i][1]; j++) {
      // concat number 'a' by 'b' times
      str += data[i][0];
    }
    
    // add a comma execept the last element of an array
    if (data.length - 1 > i) {
      str += ", ";
    }

  }
  
  //return built string
  return str;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));