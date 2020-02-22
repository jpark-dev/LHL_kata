let sumLargestNumbers = function(data) {
  
  // define a variable to sum numbers in an array
  let total = 0;

  // loop the array and add the number to get the sum total
  for (i = 0; i < data.length; i++){
  total += data[i];
  }

return total;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));