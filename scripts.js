const buttonRock = document.querySelector("#rock")
const buttonPaper = document.querySelector("#paper")
const buttonScissors = document.querySelector("#scissors")
const result = document.querySelector(".result")
const computerScore = document.querySelector("#computerScore")
const yourScore = document.querySelector("#yourScore")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empate!"
        result.style.color = "Purple"
    } else if ((human === "paper" && machine === "rock") || (human === "rock" && machine === "scissors") || (human === "scissors" && machine === "paper")) {
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        result.style.color = "green"
    } else {
        machineScoreNumber++
        computerScore.innerHTML = machineScoreNumber 
        result.innerHTML = "O computador ganhou!"
        result.style.color = "red"
    }
}



buttonRock.addEventListener("click", () => playHuman("rock"))
buttonPaper.addEventListener("click", () => playHuman("paper"))
buttonScissors.addEventListener("click", () => playHuman("scissors"))