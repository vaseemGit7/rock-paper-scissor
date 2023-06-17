let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function computerSelection(){
    const choices = ['rock','paper','scissor'];
    
    let choice = Math.floor(Math.random()*3);

    let selection = choices[choice];

    return selection;
}


function playRound(playerSelection,computerSelection){

    if(playerSelection==computerSelection){
        roundWinner ='tie';
    }

    if((playerSelection=='rock'&&computerSelection=='scissor') ||
        (playerSelection=='paper'&&computerSelection=='rock') ||
        (playerSelection=='scissor'&&computerSelection=='paper')
        ){
        playerScore++;
        roundWinner ='player';
    }

    if((playerSelection=='rock'&&computerSelection=='paper')||
        (playerSelection=='paper'&&computerSelection=='scissor')||
        (playerSelection=='scissor'&&computerSelection=='rock')){
        computerScore++;
        roundWinner ='computer';
    }

}




