function getComputerChoice() {
    let result = Math.random();
    if (result <= 0.33)
        return "rock";
    else if (result > 0.33 && result <= 0.66)
        return "paper";
    else
        return "scissors";
}

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
const resultDiv = document.querySelector("#results")
const humanStandard = document.createElement("p")
humanStandard.textContent = "You chose: "
const computerStandard = document.createElement("p")
computerStandard.textContent = "Computer chose: "


function playRound(humanChoice, computerChoice) {
    /* console.log(humanChoice) */
    const humanText = document.createElement("p")
    const computerText = document.createElement("p")
    humanText.textContent = humanChoice
    computerText.textContent = computerChoice
    humanStandard.appendChild(humanText)
    computerStandard.appendChild(computerText)


    resultDiv.appendChild(humanStandard)
    resultDiv.appendChild(computerStandard)

    console.log(computerChoice)
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock.");
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "You Lose! Paper beats Rock"
        resultDiv.appendChild(ergebnis)
        ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors.");
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "You Win! Rock beats Scissors."
        resultDiv.appendChild(ergebnis)
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beat Paper.");
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "You Lose! Scissors beat Paper."
        resultDiv.appendChild(ergebnis)
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock.");
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "You Win! Paper beats Rock."
        resultDiv.appendChild(ergebnis)
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors.");
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "You Lose! Rock beats Scissors."
        resultDiv.appendChild(ergebnis)
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beat Paper.");
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "You Win! Scissors beat Paper."
        resultDiv.appendChild(ergebnis)
        ++humanScore;
    } else if (humanChoice === computerChoice) {
        const ergebnis = document.createElement("p")
        ergebnis.textContent = "It's a Tie!"
        resultDiv.appendChild(ergebnis)
        console.log("It's a Tie!")
    }


     if (computerScore > humanScore) {
        console.log("You lost " + humanScore + " to " + computerScore);
    } else if (computerScore < humanScore) {
        console.log("You won " + humanScore + " to " + computerScore);
    } else {
        console.log("It's a tie");
    }
}

const gameButtons = document.querySelector("#gameButtons")
gameButtons.addEventListener("click", (e) => {
    const humanChoice = e.target.textContent
    playRound(humanChoice, getComputerChoice())
})