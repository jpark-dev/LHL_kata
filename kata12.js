const makeCase = function (input, casing) {

  // return string
  let returnStr = "";

  // process if input string is in object type
  if (typeof casing === "object") {

    // set current input/casing to be used in for loop functions 
    let currentInput = input;
    let currentCasing = "";

    // define object properties for casing to sort priority
    let multiParamCasing = {
      camel: false,
      pascal: false,
      snake: false,
      kebab: false,
      title: false,
      vowel: false,
      consonant: false,
      upper: false,
      lower: false
    }

    // set values of the parameter object and change matching key to 'true'
    for (i = 0; i < casing.length; i++) {
      for (j = 0; j < Object.keys(multiParamCasing).length; j++) {
        if (casing[i] === Object.keys(multiParamCasing)[j]) {
          multiParamCasing[Object.keys(multiParamCasing)[j]] = true;
        }
      }
    }

    // loop through parameter casing to run functions and run next functions with processed string
    for (x = 0; x < Object.keys(multiParamCasing).length; x++) {

      if (Object.values(multiParamCasing)[x] === true) {
        currentCasing = Object.keys(multiParamCasing)[x];
        currentInput = stringCasing(currentInput, currentCasing);

      }
    }
    // set formatted strig to the string to be returned (this process can be simplified)
    returnStr = currentInput;

    // process if input string is in string type
  } else if (typeof casing === "string") {
    returnStr = stringCasing(input, casing);

    // catch exception data types other than string and object
  } else {
    returnStr = "invalid data type for casing.";

  }

  // return the processed string.
  return returnStr;
}


// function declaration
function stringCasing(input, casing) {

  // output string to be returned
  let str = "";
  // string to be replaced with empty spaces. If none, replace with "" 
  let replaceChar = "";
  // if uppercasing is required
  let isUpperCaseRequired = false;
  // if vowels need to be uppercased
  let isVowelUpperCase = false;
  // if consonants need to be uppercased
  let isConsonantUpperCase = false;
  // if everything needs to be upprcased
  let isAllUpperCase = false;
  // if everything needs to be lowercased
  let isAllLowerCase = false;

  /* check if the previous index was an empty space. 
  If true, the next character is uppercased. 
  If false, the next character is not uppercased. 
  Any letter that starts with uppercase should set this to true.
  */
  let isSpace = false;

  // set properties for each casing models. To be factorized into an object/array later on.
  if (casing === "camel") {
    isSpace = false;
    isUpperCaseRequired = true;
    replaceChar = "";

  } else if (casing === "pascal") {
    isSpace = true;
    isUpperCaseRequired = true;
    replaceChar = "";

  } else if (casing === "snake") {
    isSpace = false;
    isUpperCaseRequired = false;
    replaceChar = "_";

  } else if (casing === "kebab") {
    isSpace = true;
    isUpperCaseRequired = false;
    replaceChar = "-";

  } else if (casing === "title") {
    isSpace = true;
    isUpperCaseRequired = true;
    replaceChar = " ";

  } else if (casing === "vowel") {
    isSpace = false;
    isUpperCaseRequired = true;
    replaceChar = " ";

    isVowelUpperCase = true;

  } else if (casing === "consonant") {
    isSpace = false;
    isUpperCaseRequired = true;
    replaceChar = " ";

    isConsonantUpperCase = true;

  } else if (casing === "upper") {
    isSpace = true;
    isUpperCaseRequired = true;
    replaceChar = " ";

    isAllUpperCase = true;

  } else if (casing === "lower") {
    isSpace = false;
    isUpperCaseRequired = true;
    replaceChar = " ";
    isAllLowerCase = true;
  }

  //loop the given string
  for (i = 0; i < input.length; i++) {
    // if the current character is an empty space while not using vowel/consonant uppercasing
    if (input[i] === " " && isVowelUpperCase === false && isConsonantUpperCase === false) {
      // next character will be uppercased
      isSpace = true;
      // set replaceChar of current casing model
      str += replaceChar;

      // if the current character is not an empty space or vowel/consonant uppercasing is used.
    } else {

      // if first letter must be uppercased
      if (isSpace === true) {

        // reset isSpace variable to loop for the next letter
        isSpace = false;

        // if met all the conditions above, check if the casing model needs uppercasing
        if (isUpperCaseRequired === true) {
          str += input[i].toUpperCase();

          // if uppercasing is not required, add current character without uppercasing to the string to be returned.
        } else if (isUpperCaseRequired === false) {
          str += input[i];

        }

        // if first letter does not need to be uppercased
      } else {

        // if using vowel uppercasing
        if (isVowelUpperCase === true) {
          // if current character in the loop contains a vowel, capitalize it.
          if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
            str += input[i].toUpperCase();

            // if not, add current character to the string to be returned without processing
          } else {
            str += input[i];

          }

          // if using consonant uppercasing
        } else if (isConsonantUpperCase === true) {
          // if containing a consonant, capitalize it.
          if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
            str += input[i].toUpperCase();

          } else {
            str += input[i];

          }

          // if using neither vowel or consonant uppercasing while not need to uppercase the first letter
        } else if (isAllUpperCase === true) {
          str += input[i].toUpperCase();

        } else if (isAllLowerCase === true) {
          str += input[i].toLowerCase();

        } else {
          str += input[i];
        }
      }
    }
  }

  return str;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));