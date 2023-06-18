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
    return playerScore ==5 || computerScore ==5 ;
}

const body = document.querySelector('body');
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

    if(isGameOver()){
        openEndGame();
    }

    const computerSelection = getComputerSelection();
    playRound(playerSelection,computerSelection);
    updateScoreMessage(playerSelection,computerSelection);
    updateScore();
    updateChoice(playerSelection,computerSelection);
    
    if(isGameOver()){
        openEndGame();
    }
    
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

function openEndGame(){
    disableWeapons();
    getFinalMessage();
    console.log('EndGame opened!');
}

function resetGame(){
    window.location.reload();
}

function disableWeapons(){
    const weaponsBtn = document.querySelectorAll('.weapon');

    weaponsBtn.forEach((weapon)=>{
        weapon.setAttribute('disabled','');
    });
}

function getFinalMessage(){
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result-section');
    body.appendChild(resultDiv);

    const championMessage = document.createElement('div');
    championMessage.classList.add('champion-message');
    resultDiv.appendChild(championMessage);

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-button');
    resetBtn.textContent ='Play Again?'
    resultDiv.appendChild(resetBtn);

    resetBtn.addEventListener('click',resetGame);

    if(playerScore>computerScore){
        championMessage.textContent="You Won!"
    }
    else{
        championMessage.textContent="You Lost!"
    }  
}
