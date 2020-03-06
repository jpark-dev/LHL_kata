const camelCase = function(input) {
  
  // build an empty string to be returned
  let str = "";

  // tells the index of newly built string whether to be capitalized or not (0 = capitalized, 1 = small)

  // boolean to make the string capitalizd or not
  let capitalOrNot = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      // if there is a space, skip one and capitalize the next character,
      capitalOrNot = true;
      
      // if the character is not an empty string, add that character to @str
    } else {

      // check if current character came right after an empty space, if so, change it to upper case
      if (capitalOrNot === true) {
        str += input[i].toUpperCase();

        // after uppercasing, set @capitalOrNot as false to reset
        capitalOrNot = false;

        // if the character did not come right after an empty space nor it contains an empty space, add to @str
      } else if (capitalOrNot === false) {
        
        str += input[i];

      }
    }
  }

  return str;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));