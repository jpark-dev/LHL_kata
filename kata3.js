let numberOfVowels = function(data) {
  // define a varialbe to count the number of vowels
  let vowelCnt = 0;
  
  // loop a given parameter and count each time when a vowel comes across
  for (let i = 0; i < data.length; i ++) {
    if (data.charAt(i) === "a" || data.charAt(i) === "e" || data.charAt(i) === "i" || data.charAt(i) === "o" || data.charAt(i) === "u") {
      vowelCnt++;
    }
  }
  return vowelCnt;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));