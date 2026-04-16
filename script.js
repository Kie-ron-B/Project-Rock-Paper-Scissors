function getComputerChoice() {
    const option = Math.floor(Math.random() * 3);
    if (option === 0) {
        return "rock"
    }
    else if (option === 1){
        return "paper"    
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
        console.log('Draw, both you and the computer picked the same thing')
        } else if (
            humanChoice == 'paper' && computerChoice == 'rock' ||
            humanChoice == 'rock' && computerChoice == 'scissors' ||
            humanChoice == 'scissors' && computerChoice == 'paper'
        ) {
            console.log(`You win!! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
            computerScore++;
    }
        console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}`);
}

}

if (humanScore > computerScore) {
    console.log('Overall... You Win!')
} else if (computerScore > humanScore) {
    console.log('Overall... You Lose!')
}   else {
    console.log('Overall... Tie')
}
}
playGame()