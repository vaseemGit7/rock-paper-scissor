let playerSelection = prompt("Choose either rock, paper or scissor");
playerSelection.toLowerCase();

function computerSelection(){
    const choices = ['rock','paper','scisscor'];
    
    let choice = Math.floor(Math.random()*3);

    let selection = choices[choice];

    return selection;
}

