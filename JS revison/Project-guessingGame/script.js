//& Guessing Game

const computerNumber = Math.floor(Math.random() * 10 + 1);
let count = 0;

function askNumber() {
  const userPrompt = prompt("Enter a number between 1 - 10:");
  const userNumber = userPrompt ? Number(userPrompt) : "no";
  return userNumber;
}

function game() {
  const userNumber = askNumber();
  if (userNumber === computerNumber) {
    count++;
    console.log(`You Won! It took you ${count} tries.`);
    count = 0;
  } else if (userNumber > computerNumber) {
    count++;
    console.log("Try a smaller number!");
    game();
  } else if (userNumber < computerNumber) {
    count++;
    console.log("Try a bigger number!");
    game();
  } else {
    console.log("please enter a valid number.");
  }
}

game();
