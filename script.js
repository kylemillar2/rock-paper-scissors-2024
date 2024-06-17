let humanScore = 0;
let computerScore = 0;

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

let playRound = (humanChoice, computerChoice) => {
    const scoreDiv = document.querySelector('div');
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
    scoreDiv.textContent = `${humanScore} - ${computerScore}`;
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));