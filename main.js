humanScore = 0;
computerScore = 0;
let humanChoice;
let roundWinner; 

const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");

const gameResult = document.createElement("div");
gameResult.setAttribute("id", "results"); 


//function getHumanChoice(){
//    entryPrompt = prompt("Enter rock, paper, or scissors: ")
//    humanChoice = entryPrompt.toLowerCase()
//    return humanChoice
//} 

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
    displayResult.textContent = `${roundWinner}`
    results.appendChild(displayResult)
}

function playGame(x) {
    for (i = 0; i < x; i++) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanChoice, computerChoice);
    }}


rockButton.addEventListener("click", () => {
    humanChoice = "rock";
    getComputerChoice();
    console.log(`The computer chose ${computerChoice}`);
    playRound(humanChoice, computerChoice);
});

paperButton.addEventListener("click", () => {
    humanChoice = "paper";
    getComputerChoice();
    console.log(`The computer chose ${computerChoice}`);
    playRound(humanChoice, computerChoice);
});

scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    getComputerChoice();
    console.log(`The computer chose ${computerChoice}`);
    playRound(humanChoice, computerChoice);
});
    

gameResult.textContent = ``

function finalTally(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else if (computerScore === humanScore) {
        console.log("It is a tie!");
    }
};
//finalTally(humanScore, computerScore)