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

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoiceText.textContent = "your choice: " + humanChoice;
        computerChoiceText.textContent = "computer choice: " + computerChoice;
    
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                humanScore++;
                roundResult.textContent = "you win! paper beats rock.";
            } else if (humanChoice == "scissors") {
                computerScore++;
                roundResult.textContent = "you lose! rock beats scissors.";
            } else {
                roundResult.textContent = "tie";
            }
        } else if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                computerScore++;
                roundResult.textContent = "you lose! paper beats rock.";
            } else if (humanChoice == "scissors") {
                humanScore++;
                roundResult.textContent = "you win! scissors beats paper.";
            } else {
                roundResult.textContent = "tie";
            }
        } else {
            if (humanChoice == "rock") {
                humanScore++;
                roundResult.textContent = "you win! rock beats scissors.";
            } else if (humanChoice == "paper") {
                computerScore++;
                roundResult.textContent = "you lose! scissors beats paper.";
            } else {
                roundResult.textContent = "tie";
            }
        }

        humanScoreText.textContent = "your score: " + humanScore;
        computerScoreText.textContent = "computer score: " + computerScore;
        if (humanScore == 5 || computerScore == 5) {
            const resultText = document.createElement("div");
            resultText.setAttribute("class", "resultText");
            result.appendChild(resultText);
            if (humanScore == 5) {
                resultText.textContent = "congrats, you win!";
            } else {
                resultText.textContent = "uh oh, computer wins :(";
            }
            const refresh = document.createElement("p");
            refresh.textContent = "thanks for playing <3 refresh to play again";
            body.removeChild(buttonDiv);
            result.removeChild(choices);
            result.removeChild(roundResult);
            body.appendChild(refresh);
        }
    }

    const body = document.querySelector(".back");

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "buttons");
    const rockButton = document.createElement("button");
    rockButton.textContent = "rock";
    const paperButton = document.createElement("button");
    paperButton.textContent = "paper";
    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "scissors";
    buttonDiv.appendChild(rockButton);
    buttonDiv.appendChild(paperButton);
    buttonDiv.appendChild(scissorsButton);
    body.appendChild(buttonDiv);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const choice = button.textContent;
            const computerChoice = getComputerChoice();
            playRound(choice, computerChoice);
        });
    });

    let humanScore = 0;
    let computerScore = 0;
    const result = document.createElement("div");
    result.setAttribute("class", "result");
    body.appendChild(result);

    const choices = document.createElement("div");
    choices.setAttribute("class", "choices");
    const humanChoiceText = document.createElement("p");
    const computerChoiceText = document.createElement("p");
    humanChoiceText.textContent = "your choice: tbd";
    computerChoiceText.textContent = "computer choice: tbd";
    choices.appendChild(humanChoiceText);
    choices.appendChild(computerChoiceText);
    result.appendChild(choices);
    const roundResult = document.createElement("p");
    roundResult.textContent = "results will be displayed here"
    roundResult.setAttribute("class", "roundResultText");
    result.appendChild(roundResult);

    const scores = document.createElement("div");
    const humanScoreText = document.createElement("p");
    humanScoreText.textContent = "your score: " + humanScore;
    const computerScoreText = document.createElement("p");
    computerScoreText.textContent = "computer score: " + computerScore;
    scores.appendChild(humanScoreText);
    scores.appendChild(computerScoreText);
    result.appendChild(scores);
}

playGame();