function getComputerChoice() {
    let result = Math.random();
    if (result <= 0.33)
        return "rock";
    else if (result > 0.33 && result <= 0.66)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    input = prompt("Please enter Rock, Paper or Scissors: ").toLowerCase()
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock.");
        ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors.");
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beat Paper.");
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock.");
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors.");
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beat Paper.");
        ++humanScore;
    } else if (humanChoice === computerChoice) {
        console.log("It's a Tie!")
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));