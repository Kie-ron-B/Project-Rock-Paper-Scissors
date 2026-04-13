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

console.log ("Computer chose: ", getComputerChoice());
console.log ("Human chose: ", getHumanChoice());