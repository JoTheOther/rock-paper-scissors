let computerScore = 0;
let playerScore = 0;

const resultDiv = document.getElementById("result");

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

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        resultDiv.textContent = "It's a draw!";
    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) {
        resultDiv.textContent = "You win!";
        playerScore++;
    } else {
        resultDiv.textContent = "You lose. Computer wins!";
        computerScore++;
    }
    updateScores();
    checkforWinner();

}

function updateScores() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function checkforWinner() {
    if (playerScore == 5) {
        resultDiv.textContent = "Congratulations! You are first to win 5 rounds!"
        resetGame();
    }
    if (computerScore == 5) {
        resultDiv.textContent = "Unlucky... Computer is first to win 5 rounds!"
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.id)
    });
});