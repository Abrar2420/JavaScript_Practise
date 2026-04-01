//& Rock Paper Sicssors

function game() {
  const userPrompt = prompt("Enter you choice:");
  const userChoice = userPrompt ? userPrompt.toLowerCase() : "no";

  const computerPrompt = Math.floor(Math.random() * 3) + 1;
  // console.log(computerPrompt);
  let computerChoice;

  switch (computerPrompt) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "no";
      break;
  }

  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("computer Wins");
  } else if (userChoice === computerChoice) {
    console.log("its a draw");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("user wins");
  }

  const playAgainPrompt = prompt(`Enter "yes" to play again - "no" to stop:`);
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  setTimeout(() => {
    if (playAgain === "yes") {
      game();
    } else if (playAgain === "no") {
      console.log("done");
    }
  }, 2000);
}

game();
