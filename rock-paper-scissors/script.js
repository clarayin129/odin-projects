function getComputerChoice() {
    let number = Math.random() * 30;
    if (number >= 0 && number < 10) {
        return "rock";
    } else if (number >= 10 && number < 20) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("type your choice: rock, paper, or scissors");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                humanScore++;
                console.log("you win! paper beats rock.");
            } else if (humanChoice == "scissors") {
                computerScore++;
                console.log("you lose! rock beats scissors.");
            } else {
                console.log("tie");
            }
        } else if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                computerScore++;
                console.log("you lose! paper beats rock.");
            } else if (humanChoice == "scissors") {
                humanScore++;
                console.log("you win! scissors beats paper.");
            } else {
                console.log("tie");
            }
        } else {
            if (humanChoice == "rock") {
                humanScore++;
                console.log("you win! rock beats scissors.");
            } else if (humanChoice == "paper") {
                computerScore++;
                console.log("you lose! scissors beats paper.");
            } else {
                console.log("tie");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("round " + (i + 1) + " of 5");
        const humanChoice = getHumanChoice();
        console.log("human choice: " + humanChoice);
        const computerChoice = getComputerChoice();
        console.log("computer choice: " + computerChoice);
        playRound(humanChoice, computerChoice);
    }

    console.log("your score: " + humanScore);
    console.log("computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("you win!");
    } else if (computerScore > humanScore) {
        console.log("computer wins!");
    } else {
        console.log("it's a tie!");
    }
}

playGame();