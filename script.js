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

function isGameOver(){
    return playerScore==5 || computerScore ==5 ;
}

const resultHeader = document.getElementById("resultHeader");
const resultMessage = document.getElementById("resultMessage");
const playerChoice = document.getElementById("playerChoice");
const enemyChoice = document.getElementById("enemyChoice");
const playerWins = document.getElementById("playerScore");
const enemyWins = document.getElementById("enemyScore");
const resultAnnouncement =document.getElementById("resultAnnouncement");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("resetBtn");

rockBtn.addEventListener('click',() => handleClick('rock'));
paperBtn.addEventListener('click',() => handleClick('paper'));
scissorBtn.addEventListener('click',() => handleClick('scissor'));
resetBtn.addEventListener('click',resetGame);

function handleClick(playerSelection){

    const computerSelection = getComputerSelection();
    playRound(playerSelection,computerSelection);
    updateScoreMessage(playerSelection,computerSelection);
    updateScore();
    updateChoice(playerSelection,computerSelection);
    
    
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

function updateScoreMessage(playerSelection,computerSelection){
    if(roundWinner === 'tie'){
        resultMessage.textContent ="Play Again!";
    }
    else if(roundWinner === 'player'){
        resultMessage.textContent = `${capitalize(playerSelection)} beats ${computerSelection}`;
    }
    else if(roundWinner === 'computer'){
        resultMessage.textContent =`${capitalize(playerSelection)} is beaten by ${computerSelection}`;
    }
}

function capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}

function updateChoice(playerSelection,computerSelection){
    switch(playerSelection){
        case 'rock':
            playerChoice.setAttribute('alt','rock');
            break;
        case 'paper':
            playerChoice.setAttribute('alt','paper');
            break;
        case 'scissor':
            playerChoice.setAttribute('alt','scissor');
            break;        
    }

    switch(computerSelection){
        case 'rock':
            enemyChoice.setAttribute('alt','rock');
            break;
        case 'paper':
            enemyChoice.setAttribute('alt','paper');
            break;
        case 'scissor':
            enemyChoice.setAttribute('alt','scissor');
            break;
    }
}

function resetGame(){
    window.location.reload();
}
