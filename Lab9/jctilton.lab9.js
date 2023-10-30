function getPlayerChoice() {
    let playerChoice = document.getElementById("playerChoice").value.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        document.getElementById("playerChoice").value = "";
        var input = prompt("Invalid entry. Please choose either Rock, Paper, or Scissors:").toLowerCase();
        document.getElementById("playerChoice").value = input
        return getPlayerChoice()
    }
}

function getCompChoice() {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

function determineWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return "Tie!"
    } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "scissors" && compChoice === "paper") ||
        (playerChoice === "paper" && compChoice === "rock")
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}


function playGame() {
    const playerChoice = getPlayerChoice();
    const compChoice = getCompChoice();
    console.log("User chose: " + playerChoice);
    console.log("Computer chose: " + compChoice);
  
    const result = determineWinner(playerChoice, compChoice);
    const resultElement = document.getElementById("result");
    const compElement = document.getElementById("compChoice");
    compElement.textContent = compChoice;
    resultElement.textContent = result;
    console.log(result)

    if(confirm("Play again?")) {
        document.getElementById("playerChoice").value = "";
    }

}


