const urlDecode = function (text) {

  // create object to be returned
  let returnObj = {};
  // create object key and value to be formatted
  let objKeyName = "";
  let objValueName = "";
  // check if current string being built is a key or a vaue
  let isKey = true;
  // string to be replaced with current character
  let replaceTextWith = "";

  // loop the given string @text
  for (i = 0; i < text.length; i++) {

    // if current character is not an equal : string, either key or value
    if (text[i] !== "=") {

      // if current character is not equal and contains '%20' to be replaced with a space
      if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0") {
        replaceTextWith = " ";

      } else if (text[i] === "2" && text[i - 1] === "%" && text[i + 1] === "0") {
        replaceTextWith = "";

      } else if (text[i] === "0" && text[i - 1] === "2" && text[i - 2] === "%") {
        replaceTextWith = "";

        // if current character is an ampersand, assign key and value strings built so far to the object
      } else if (text[i] === "&") {

        returnObj[objKeyName] = objValueName;
        // reset object key and value names and text to be replaced with the current character
        replaceTextWith = "";
        objKeyName = "";
        objValueName = "";
        isKey = true;

        // all other conditions, assign @replaceTextWith with current ith loop character of the given text
      } else {
        replaceTextWith = text[i];
      }

      // if current string being built is a key, add current ith character of the text to @objKeyName variable
      if (isKey === true) {
        objKeyName += replaceTextWith;

        // if current string being built is a value, add current ith character of the text to @objValueName variable
      } else if (isKey === false) {
        objValueName += replaceTextWith;
      }

      // if current ith character of the given string is an equal sign, switch isKey value to true or false
    } else if (text[i] === "=") {
      if (isKey === true) {
        isKey = false;
      } else if (isKey === false) {
        isKey = true;
      }
    }

  }

  // assign the lastly built key:value strings to the object
  returnObj[objKeyName] = objValueName;

  // return the constructed object
  return returnObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);