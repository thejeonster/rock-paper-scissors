humanScore = 0
computerScore = 0 


function getComputerChoice(){
    let number = Math.random();
    if ((0 <= number) && (number < 1/3)) {
        result = "rock"; 
    } 
    else if ((1/3 <= number) && (number < 2/3)) {
        result = "scissors";
    } 
    else if ((2/3 <= number) && (number < 1)) {
        result = "paper";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors: ")
}

getComputerChoice();
getHumanChoice()