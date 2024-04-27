humanScore = 0;
computerScore = 0;
humanChoice = ""
computerChoice = ""

function playGame(){
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
    } getComputerChoice()
    
    function getHumanChoice(){
        entryPrompt = prompt("Enter a choice: ")
        humanChoice = entryPrompt.toLowerCase()
        return humanChoice
    } getHumanChoice()

    function playRound(x, y){
        if ((humanChoice === "rock") && (computerChoice === "paper")) {
            computerScore += 1;
            console.log("Paper beats Rock!");
        } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            humanScore += 1;
            console.log("Rock beats Scissors!");
        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            humanScore += 1;
            console.log("Paper beats Rock!");
        } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            computerScore += 1;
            console.log("Scissors beats Paper!");
        } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            humanScore += 1;
            console.log("Scissors beats Paper!");
        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            computerScore += 1;
            console.log("Rock beats Scissors!");
        } else if (humanChoice === computerChoice) {
            console.log("Tie Game!");
        } 
} playRound(humanChoice, computerChoice)}

playGame()
console.log(humanChoice, computerChoice)
console.log("User = " + humanScore, "Computer = " + computerScore)

playGame()
console.log(humanChoice, computerChoice)
console.log("User = " + humanScore, "Computer = " + computerScore)

playGame()
console.log(humanChoice, computerChoice)
console.log("User = " + humanScore, "Computer = " + computerScore)

playGame()
console.log(humanChoice, computerChoice)
console.log("User = " + humanScore, "Computer = " + computerScore)

playGame()
console.log(humanChoice, computerChoice)
console.log("User = " + humanScore, "Computer = " + computerScore)

function finalTally(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else if (computerScore === humanScore) {
        console.log("It is a tie!");
    }
}
finalTally(humanScore, computerScore)