let currentRound = 1;
const totalRounds = 5;
let playerScore = 0;
let computerScore = 0;

// Function to update the round display
function updateRoundDisplay() {
    document.getElementById("round").textContent = currentRound;
}

// Function to update the score display
function updateScoreboard() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Function to play one round
function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let roundWinner = "";

    // Determine the winner of the round
    if (playerChoice === computerChoice) {
        roundWinner = "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        roundWinner = "player";
        playerScore++;
    } else {
        roundWinner = "computer";
        computerScore++;
    }

    // Display the round result
    document.getElementById("winner").textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${roundWinner.charAt(0).toUpperCase() + roundWinner.slice(1)} wins this round!`;

    // Update score and round display
    updateScoreboard();

    // Increment the round and check if the game is over
    if (currentRound < totalRounds) {
        currentRound++;
        updateRoundDisplay();
    } else {
        // After 5 rounds, declare the overall winner
        setTimeout(() => {
            if (playerScore > computerScore) {
                document.getElementById("winner").textContent = `Player Wins the Game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`;
            } else if (playerScore < computerScore) {
                document.getElementById("winner").textContent = `Computer Wins the Game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`;
            } else {
                document.getElementById("winner").textContent = `It's a Tie! Final Score - Player: ${playerScore}, Computer: ${computerScore}`;
            }
            document.querySelector("button").style.display = "inline"; // Show the restart button
        }, 1000);
    }
}

// Function to reset the game
function resetGame() {
    currentRound = 1;
    playerScore = 0;
    computerScore = 0;
    updateRoundDisplay();
    updateScoreboard();
    document.getElementById("winner").textContent = "";
    document.querySelector("button").style.display = "none"; // Hide the restart button until the game is over
}
