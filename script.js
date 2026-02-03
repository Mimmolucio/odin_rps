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

