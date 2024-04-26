
function getComputerChoice(){
    let number = Math.random();
    if ((0 <= number) && (number < 1/3)) {
        console.log("rock"); 
    } 
    else if ((1/3 <= number) && (number < 2/3)) {
        console.log("papers");
    } 
    else if ((2/3 <= number) && (number < 1)) {
        console.log("scissors");
    }
}

function getHumanChoice(){
    choice = prompt("Enter rock, paper, or scissors: ")
}

getComputerChoice();
getHumanChoice()
console.log(choice)