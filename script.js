let getComputerChoice = () => {
    let random = Math.random();
    if (random <= 1/3) {
        return "rock";
    } else if (random <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getHumanChoice = () => {
    let choice = prompt("Choose rock, paper or scissors: ");
    return choice;
}

let playGame = () => {
    let playRound = (humanChoice, computerChoice) => {
        console.log(humanChoice)
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice == "rock" && computerChoice == "scissors"
            || humanChoice == "paper" && computerChoice == "rock"
            || humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if (computerChoice == "rock" && humanChoice == "scissors"
            || computerChoice == "paper" && humanChoice == "rock"
            || computerChoice == "scissors" && humanChoice == "paper") {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`It's a draw, you both chose ${humanChoice}`);
        }
    }
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final score: you ${humanScore}, computer ${computerScore}`);
}

playGame();