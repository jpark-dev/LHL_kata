const conditionalSum = function(values, condition) {
  
  // define a variable for sum total
  let total = 0;

  // take only even numbers
  if (condition === "even") {
    
    // loop through an array and add the value if it is an even number
    for (let i = 0; i < values.length; i++) {
      //even number has the reminder of 0 if divided by 2
      if (values[i] % 2 === 0) {
        //add the current value to the total sum variable
        total += values[i];
      }
    }
    return total;
    
    // take only odd numbers
  } else if (condition === "odd") {
    
    for (let i = 0; i < values.length; i++) {
      // odd number has the reminder of 1 if divided by 2
      if (values[i] % 2 === 1) {
        total += values[i];
      }
    }
    return total;

    // if it's neither odd or even integers such as negative numbers, 3.14... return 0
  } else {
    return 0;
  }
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));