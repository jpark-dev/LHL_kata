let prompt = require("prompt-sync")({
  sigint: true

});

// create a random Number and change it to a number type
const randomNumber = Number((Math.random() * 100).toFixed(0));

let attemptCount = 0;

const answeredNumbers = [];

let msg = "";

for (;;) {
  let answer = prompt("Guess a number: ");

  if (Number(answer).toString() === "NaN") {
    msg = "Not a number! Try again!";
    attemptCount++;

  } else {
    if (answeredNumbers.length === 0) {
      answeredNumbers.push(answer);

      if (Number(answer) < randomNumber) {
        attemptCount++;
        msg = "Too Low!";

      } else if (Number(answer) > randomNumber) {
        attemptCount++;
        msg = "Too High!";

        // if answer is correct, display message with attempts and break the while loop.
      } else if (Number(answer) === randomNumber) {
        attemptCount++;
        msg = "You got it! You took " + attemptCount + " attempts!";
        console.log(msg);

        break;
      }

      // if array length > 0
    } else if (answeredNumbers.length !== 0) {

      // to check if there is a same answer in the array
      let isExist = false;

      for (let i = 0; i < answeredNumbers.length; i++) {

        // if there was an answer in the answer array, dispaly message and break out of for loop
        if (answeredNumbers[i] === answer) {
          msg = "Already Guessed!";
          attemptCount++;
          isExist = true;
          break;

        }
      }

      // if answer was not previously asked, push current answer to the answer array
      if (isExist === false) {
        answeredNumbers.push(answer);

        // compare input answer with random number
        if (Number(answer) < randomNumber) {
          attemptCount++;
          msg = "Too Low!";

        } else if (Number(answer) > randomNumber) {
          attemptCount++;
          msg = "Too High!";

          // if answer is correct, display message with attempts and break the while loop.
        } else if (Number(answer) === randomNumber) {
          attemptCount++;
          msg = "You got it! You took " + attemptCount + " attempts!";
          console.log(msg);

          break;
        }
      }
    }
  }

  // user command input message to be displayed
  console.log("> " + answer);
  console.log(msg);

  msg = "";

}