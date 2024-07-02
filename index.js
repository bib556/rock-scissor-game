// this code is for user choice
/* let rocky = document.getElementById('rock')
rocky.addEventListener("click",myFunction) */

let yourChoice = document.getElementById("yourChoice")// this is my Choice
let computerChoice = document.getElementById("computerChoice") //this is computer Choice
/* function myFunction(){
    yourChoice.innerHTML = "Rock"
}
let paper=document.getElementById('paper')
paper.addEventListener("click",myFunction1)

function myFunction1(){
    yourChoice.innerHTML = "Paper"
}

let scissor = document.getElementById('scissor')
scissor.addEventListener("click",myFunction2)

function myFunction2(){
    yourChoice.innerHTML = " Scissor"
} */
// this code id for the computer choice 
// let rock = 1;paper =2, scissor  =3;

//let buttons =document.getElementsByTagName("button");

/* for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", randomFunc);
}
let computerChoice = document.getElementById("computerChoice") //this is computer Choice
let arr1 = ["Rock","paper","Scissor"]
function randomFunc (){
  let value = (arr1[(Math.floor(Math.random()* arr1.length))]);
  computerChoice.innerHTML =  value;
} */
//case 1 rock and rock , rock and paper , rock and scissor, scissor and paper
let yourScore = document.getElementById("yourScore")
let computerScore = document.getElementById("computerScore")
let yourCurrentScore = 0;
let computerCurrentScore = 0;

function playGame(choice) { // this is user choice
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
//
    yourChoice.innerHTML = choice;
    computerChoice.innerHTML = computerRandomChoice;// this is computer choice

    if (choice === computerRandomChoice) {
        yourCurrentScore++;
        computerCurrentScore++;
    } else if (
        (choice === 'Rock' && computerRandomChoice === 'Scissors') ||(choice === 'Paper' && computerRandomChoice === 'Rock') || (choice === 'Scissors' && computerRandomChoice === 'Paper')) {
        yourCurrentScore++;
    } else {
        computerCurrentScore++;
    }

    yourScore.innerHTML = "Your score: " + yourCurrentScore;
    computerScore.innerHTML = "Computer score: " + computerCurrentScore;
}

