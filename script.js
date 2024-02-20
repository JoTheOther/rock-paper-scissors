function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice == 0) {
        computerChoice = "rock"
    } else if (computerChoice == 1) {
        computerChoice = "paper"
    } else if (computerChoice == 2) {
        computerChoice = "scissors"
    }
    return computerChoice
}


function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

    return userChoice
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        alert("Its a draw!")
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        alert("You win!")
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        alert("You win!")
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        alert("You win!")
    } else {
        alert("Computer wins!")
    }

}


function playGame() {
    playRound(getComputerChoice(), getUserChoice())
}

playGame();