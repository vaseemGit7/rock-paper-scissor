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

function playRound(playerSelection,computerSelection){
    if(playerSelection=='rock'&&computerSelection=='scissor'){
        return "You win!,Rock beats Scissor";
    }
    else if(playerSelection=='rock'&&computerSelection=='paper'){
        return "You lose!,Paper beats Rock";
    }
    else if(playerSelection=='paper'&&computerSelection=='rock'){
        return "You win!,Paper beats Rock";
    }
    else if(playerSelection=='paper'&&computerSelection=='scissor'){
        return "You lose!,Scissor beats Paper";
    }
    else if(playerSelection=='scissor'&&computerSelection=='paper'){
        return "You win!,Scissor beats Paper";
    }
    else if(playerSelection=='scissor'&&computerSelection=='rock'){
        return "You lose!,Rock beats Scissor";
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

let rounds = 5;

while(rounds>0){
    console.log(playRound(playerSelection(),computerSelection()));
    rounds--;
}

