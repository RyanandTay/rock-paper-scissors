let humanScore = 0;
let computerScore = 0;

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    for (let roundCount = 1; roundCount <= 5; roundCount++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore > computerScore) {
        console.log("Congrats, you beat the computer! The final score was: " + humanScore + " vs " + computerScore);
    } else {
        console.log("You lost. The final score was: " + humanScore + " vs " + computerScore);
    }
}

function getComputerChoice() {
    let randomNumber
    let computerChoice
    randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= (1/3)) {
        computerChoice = "rock"
    } else if (randomNumber > 1/3 && randomNumber <= (2/3)) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissor"
    }

    return computerChoice;
}

function getHumanChoice(roundCount) {
    let humanChoice = prompt("Rock, Paper, or Scissor? Choose wisely! (Round " + roundCount);

    return humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie, no winner this round. You both chose " + humanChoice + ".")
    } else {
        switch (computerChoice + "-" + humanChoice){
            case "rock-paper":
                console.log("Congrats, your paper won!");
                humanScore++;
                break;
            case "rock-scissor":
                console.log("Too bad, your scissor lost.");
                computerScore++;
                break;
            case "paper-scissor":
                console.log("Congrats, your scissor won!");
                humanScore++;
                break;
            case "paper-rock":
                console.log("Too bad, your rock lost.");
                computerScore++;
                break;
            case "scissor-rock":
                console.log("Congrats, your rock won!");
                humanScore++;
                break;
            case "scissor-paper":
                console.log("Too bad, your paper lost.");
                computerScore++;
                break;
        }
    }
}


