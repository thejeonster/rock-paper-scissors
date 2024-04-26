
function getComputerChoice(){
    let number = Math.random();
    if ((0 <= number) && (number < 1/3)) {
        console.log("Rock"); 
    } 
    else if ((1/3 <= number) && (number < 2/3)) {
        console.log("Papers");
    } 
    else if ((2/3 <= number) && (number < 1)) {
        console.log("Scissors");
    }
    console.log(number)
}

getComputerChoice();