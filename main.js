humanScore = 0;
computerScore = 0;
let humanChoice;
let roundWinner; 

const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");

const gameResult = document.createElement("div");
gameResult.setAttribute("id", "results"); 

function finalTally(humanScore, computerScore) {
    if (humanScore == 5) {
        let gameWinner = document.createElement("div");
        gameWinner.textContent = "You win!";
        results.appendChild(gameWinner);
    } else if (computerScore == 5) {
        let gameWinner = document.createElement("div");
        gameWinner.textContent = "Computer wins!";
        results.appendChild(gameWinner);
    }   
};

function getComputerChoice(){
    let number = Math.random();
    if ((0 <= number) && (number < 1/3)) {
        return computerChoice = "rock"; 
    } 
    else if ((1/3 <= number) && (number < 2/3)) {
        return computerChoice = "scissors";
    } 
    else if ((2/3 <= number) && (number < 1)) {
        return computerChoice = "paper";
    }
} 

function playRound(x, y){
    if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerScore += 1;
        roundWinner = "Paper beats Rock!";
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore += 1;
        roundWinner = "Rock beats Scissors!";
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore += 1;
        roundWinner = "Paper beats Rock!";
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore += 1;
        roundWinner = "Scissors beats Paper!";
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore += 1;
        roundWinner = "Scissors beats Paper!";
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        computerScore += 1;
        roundWinner = "Rock beats Scissors!";
    } else if (humanChoice === computerChoice) {
        roundWinner = "Tie Game!";
    }
    let displayResult = document.createElement("div");
    displayResult.textContent = `${roundWinner} Your score is ${humanScore}. 
    The computer's score is ${computerScore}.`;
    results.appendChild(displayResult);
}
rockButton.addEventListener("click", () => {
    humanChoice = "rock";
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    finalTally(humanScore, computerScore);
});

paperButton.addEventListener("click", () => {
    humanChoice = "paper";
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    finalTally(humanScore, computerScore);
});

scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    finalTally(humanScore, computerScore);
});
    