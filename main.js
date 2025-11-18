const choices = ['rock', 'paper', 'scissors'];

/*
get computer choice 
*/
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length );
    const computerChoice = choices[randomIndex];
    return computerChoice;
};

// get human choice

function getHumanChoice(){
    let humanChoice = window.prompt("Enter your choice: Rock, Paper or Scissors");
    return humanChoice.toLowerCase();
};


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase;
    if(humanChoice === computerChoice){
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
    }
    else{
        computerScore++;
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

function playGame(){
    for(let i = 0; i < 5; i++ ){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if(humanScore === computerScore){
        console.log('TIE!');
    }
    else if(humanScore > computerScore){
        console.log('YOU WIN');
    }
    else{
        console.log("YOU LOSE!");
    }
}

playGame();
