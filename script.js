function playerSelection(){
    let playerChoice = prompt("Choose either rock, paper or scissor");
    return playerChoice.toLowerCase();
}

function computerSelection(){
    const choices = ['rock','paper','scissor'];
    
    let choice = Math.floor(Math.random()*3);

    let selection = choices[choice];

    return selection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection){

    if(playerSelection=='rock'&&computerSelection=='scissor'){
        playerScore++;
        return ["player score : " + playerScore,"You win!,Rock beats Scissor"];
    }

    else if(playerSelection=='rock'&&computerSelection=='paper'){
        computerScore++;
        return ["computer score : " + computerScore,"You lose!,Paper beats Rock"];
    }

    else if(playerSelection=='paper'&&computerSelection=='rock'){
        playerScore++;
        return ["player score : " + playerScore,"You win!,Paper beats Rock"];
    }

    else if(playerSelection=='paper'&&computerSelection=='scissor'){
        computerScore++;
        return ["computer score : " + computerScore,"You lose!,Scissor beats Paper"];
    }

    else if(playerSelection=='scissor'&&computerSelection=='paper'){
        playerScore++;
        return ["player score : " + playerScore,"You win!,Scissor beats Paper"];
    }

    else if(playerSelection=='scissor'&&computerSelection=='rock'){
        computerScore++;
        return ["computer score : " + computerScore,"You lose!,Rock beats Scissor"];
    }

    else if(playerSelection=='rock'&&computerSelection=='rock'){
        return "Draw!, Play again!"
    }

    else if(playerSelection=='scissor'&&computerSelection=='scissor'){
        return "Draw!, Play again!"
    }

    else if(playerSelection=='paper'&&computerSelection=='paper'){
        return "Draw!, Play again!"
    }

    else{
        return "Enter correctly!.";
    }
}


function game(){
    let rounds = 5;

    while(rounds>0){
        console.log(playRound(playerSelection(),computerSelection()));
        rounds--;
    }

    if(playerScore>computerScore){
        console.log("Player wins!")
    }
    else if(computerScore>playerScore){
        console.log("Computer wins!")
    }
}

game();
