const choices = ["rock", "paper", "scissors"];

function getcomputerChoice() {
return choices[Math.floor(Math.random()*choices.length)] 
}


function declareWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return "It's a tie"

    } else if (!choices.includes(userChoice)) {
        return "Invalid, please select rock, paper or scissors"  

    } else if ( (userChoice === "rock" && computerChoice === "scissors")||
    (userChoice === "paper" && computerChoice === "rock")||
    (userChoice === "scissors" && computerChoice === "paper")){
    return "You Win!"

    } else {
        return "You Lose!"
    }
}


const userChoice = prompt("Please Enter rock, paper or scissors?").toLowerCase();
const computerChoice = getcomputerChoice();
console.log(declareWinner(userChoice, computerChoice)); 



// function computer(){
// return Math.floor(Math.random)*choices.length;
// }

// const user = prompt("Please enter Rock, Paper or Scissors");

// function winner(computer, user){
// if (computer === user){ 
//     return "It's a tie";
// }
// else if (computer === "Rock" && user === "Paper") ||

// (computer === "Paper" && user === "Scissors")
//  ||
// (computer === "Scissors" && user === "Rock")

//     return "You win";
    
// else {
//     return You loose;
// }}

// console.log(winner);






// let name;
// setTimeout(() => {
//     name = "kachi"
    
// }, 5000);

// setInterval(() => {
    
//     console.log("name");
// }, 1000);


// let p = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("kachi")
//     }, 5000);
// })
// console.log("p");






