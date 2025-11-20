document.querySelector(".container")

const humanScoreDisplay = document.querySelector(".human_score");
const computerScoreDisplay = document.querySelector(".computer_score");
const tieDisplay = document.querySelector(".tie_counter");
const result = document.querySelector(".result");


const rockBtn = document.querySelector("#rock_btn");
const paperBtn = document.querySelector("#paper_btn");
const scissorsBtn = document.querySelector("#scissors_btn");

const playAgainBtn = document.querySelector("#play_again");



const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length );
    const computerChoice = choices[randomIndex];
    return computerChoice;
};


/*function getHumanChoice(){
    let humanChoice = window.prompt("Enter your choice: Rock, Paper or Scissors");
    return humanChoice.toLowerCase();
};
*/


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    tieDisplay.textContent = "";
    if(humanChoice === computerChoice){
    tieDisplay.textContent = "ITS A TIE!"
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        humanScoreDisplay.textContent = "YOUR SCORE: " + humanScore;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        humanScoreDisplay.textContent = "YOUR SCORE: " + humanScore;
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        humanScoreDisplay.textContent = "YOUR SCORE: " + humanScore;
    }
    else{
        computerScore++;
        computerScoreDisplay.textContent = "COMPUTER SCORE: " + computerScore;
    };
    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            result.textContent = "YOU WON"
        }
        else if(computerScore > humanScore){
            result.textContent = "YOU LOST"
        }
        else{
            return "GAME OVER"
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}
rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
})

paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
})

scissorsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
})

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    tieDisplay.textContent = "";
    result.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

}

playAgainBtn.addEventListener("click", () => {
    resetGame();
})

