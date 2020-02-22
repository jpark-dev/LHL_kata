const urlEncode = function(text) {

  // define a new output string to be returned
  let newText = "";

  // define a starting index and ending index, to seperate strings starting and ending with an empty space
  let startIndex = 0;
  let endIndex = text.length;

  // check if the string starts with an empty space
  if (text[0] === " "){
    startIndex = 1;
  }

  // check if the last string contains an empty space
  if (text[text.length - 1 ] === " "){
    endIndex = text.length - 1;
  }

  // loop with the given indexes and write characters and if there is an empty space, write "%20", 
  for (i = startIndex; i < endIndex; i++){
    if (text[i] === " "){
      newText += "%20";

    } else {
      newText += text[i];
    }
  }

  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));