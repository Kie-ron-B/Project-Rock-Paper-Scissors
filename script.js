function getComputerChoice() {
    const option = Math.floor(Math.random() * 3);
    if (option === 0) {
        return "Rock!"
    }
    else if (option === 1){
        return "Paper!"    
    }
    else {
        return "Scissors!"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Draw, both you and the computer picked the same thing')
    } else if (
        humanChoice == 'paper' && computerChoice == 'rock',
        humanChoice == 'rock' && computerChoice == 'scissors',
        humanChoice == 'scissors' && computerChoice == 'paper'
    ) {
        console.log(`You win!! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Current Score - Human: ${humanScore} | Computer: ${computerScore}`);