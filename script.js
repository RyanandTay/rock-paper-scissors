let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let message;

document.addEventListener("DOMContentLoaded", setupListeners);

const addMessage = document.querySelector(".message");
const addScore = document.querySelector(".score");
const addRound = document.querySelector(".round");
const container = document.querySelector(".container");

function setupListeners() {
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
    container.appendChild(buttonContainer);
    const buttonRock = document.createElement("button");
    buttonRock.textContent = "Rock"
    buttonContainer.appendChild(buttonRock);
    const buttonPaper = document.createElement("button");
    buttonPaper.textContent = "Paper"
    buttonContainer.appendChild(buttonPaper);
    const buttonScissor = document.createElement("button");
    buttonScissor.textContent = "Scissor"
    buttonContainer.appendChild(buttonScissor);

    buttonRock.addEventListener("click", () => {
        playRound("rock");
        updateRoundAndScore();
    });

    buttonPaper.addEventListener("click", () => {
        playRound("paper");
        updateRoundAndScore();
    });

    buttonScissor.addEventListener("click", () => {
        playRound("scissor");
        updateRoundAndScore();
    });
}

function updateRoundAndScore() {
        roundCount++;
        addRound.textContent = "Round: " + roundCount;

    if (roundCount < 5) {
        addScore.textContent = "You: " + humanScore + " | " + "Computer: " + computerScore;

        if (message.slice(0, 4) === "Nice") {
            addMessage.textContent = message;
            addMessage.style.color = "green";
        } else if (message.slice(0,4) === "Too ") {
            addMessage.textContent = message;
            addMessage.style.color = "red";
        } else {
            addMessage.textContent = message;
            addMessage.style.color = "black";
        }

    } else if (humanScore > computerScore) {
        message = "Congratulations! You won the game! The final score was: " + humanScore + " vs " + computerScore;
        addMessage.textContent = message;
        addMessage.style.cssText = "font-size: 28px; color: green";

        addScore.textContent = "You: " + humanScore + " | " + "Computer: " + computerScore;
        addScore.style.cssText = "font-size: 22px;";
        restartGame();
    } else if (humanScore < computerScore) {
        message = "You lost the game. The final score was: " + humanScore + " vs " + computerScore;
        addMessage.textContent = message;
        addMessage.style.cssText = "font-size: 28px; color: red";

        addScore.textContent = "You: " + humanScore + " | " + "Computer: " + computerScore;
        addScore.style.cssText = "font-size: 22px";
        restartGame();
    } else {
        message = "The game was a tie. The final score was: " + humanScore + " vs " + computerScore;
        addMessage.textContent = message;
        addMessage.style.cssText = "font-size: 28px";

        addScore.textContent = "You: " + humanScore + " | " + "Computer: " + computerScore;
        addScore.style.cssText = "font-size: 22px";
        restartGame();
    }
 }

function restartGame() {
    const buttonContainer = document.querySelector("#buttonContainer");
    container.removeChild(buttonContainer);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Restart"
    container.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
        container.removeChild(resetButton);
        humanScore = 0;
        computerScore = 0;
        roundCount = 0;
        setupListeners()
        addMessage.textContent = "";
        addMessage.style.cssText = "";
        addRound.textContent = "";
        addRound.style.cssText = "";
        addScore.textContent = "";
        addScore.style.cssText = "";
    });
}

function getComputerChoice() {
    let randomNumber
    let computerChoice
    randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= (1/3)) {
        computerChoice = "rock"
    } else if (randomNumber > (1/3) && randomNumber <= (2/3)) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissor"
    }

    return computerChoice;
}

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let humanChoice = choice;

    if (humanChoice === computerChoice) {
        message = "Tie, no winner this round. You both chose " + humanChoice + ".";
    } else {
        switch (computerChoice + "-" + humanChoice){
            case "rock-paper":
            case "paper-scissor":
            case "scissor-rock":
                message = "Nice! your " + humanChoice + " won!";
                humanScore++;
                break;
            case "rock-scissor":
            case "paper-rock":
            case "scissor-paper":
                message = "Too bad, your " + humanChoice + " lost.";
                computerScore++;
                break;
        }
    }
}


