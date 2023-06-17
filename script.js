let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerSelection(){
    const choices = ['rock','paper','scissor'];
    
    let choice = Math.floor(Math.random()*3);

    let selection = choices[choice];

    return selection;
}


function playRound(playerSelection,computerSelection){

    if(playerSelection==computerSelection){
        roundWinner ='tie';
        console.log('tie');
    }

    if((playerSelection=='rock'&&computerSelection=='scissor') ||
        (playerSelection=='paper'&&computerSelection=='rock') ||
        (playerSelection=='scissor'&&computerSelection=='paper')
        ){
        playerScore++;
        roundWinner ='player';
        console.log('player');
    }

    if((playerSelection=='rock'&&computerSelection=='paper')||
        (playerSelection=='paper'&&computerSelection=='scissor')||
        (playerSelection=='scissor'&&computerSelection=='rock')){
        computerScore++;
        roundWinner ='computer';
        console.log('enemy')
    }

}

const resultHeader = document.getElementById("resultHeader");
const resultMessage = document.getElementById("resultMessage");
const playerChoice = document.getElementById("playerChoice");
const enemyChoice = document.getElementById("enemyChoice");
const playerWins = document.getElementById("playerScore");
const enemyWins = document.getElementById("enemyScore");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");

rockBtn.addEventListener('click',() => handleClick('rock'));
paperBtn.addEventListener('click',() => handleClick('paper'));
scissorBtn.addEventListener('click',() => handleClick('scissor'));

function handleClick(playerSelection){
    const computerSelection = getComputerSelection();
    playRound(playerSelection,computerSelection);
    updateScore();
    
}

function updateScore(){
    if(roundWinner === 'tie'){
        resultHeader.textContent = "It's a Tie!"
    }
    if(roundWinner === 'player'){
        resultHeader.textContent = "You Won!"
    }
    if(roundWinner === 'computer'){
        resultHeader.textContent = "You Lost!"
    }

    playerWins.textContent = playerScore;
    enemyWins.textContent = computerScore;
}




