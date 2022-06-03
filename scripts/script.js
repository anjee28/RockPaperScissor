
let computerSelection = "";
let playerSelection = "";
let result = "";                                        //1 win, 0 tie, -1 lose


function computerPlay() {                               //Function for Bot Play

    let botPlay = Math.floor(Math.random() * 3) + 1;    //Gives random number from 1-3

    switch(botPlay) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    } 
}

function gameStart() {

    computerPlay();
    const choice = prompt("What do you wanna play?");
    finalChoice = choice.toLowerCase();                     //makes case-insensitive
    playerPlay(finalChoice);
}

function playerPlay(playerChoice){

    switch(playerChoice) {
        case 'rock':
            playerSelection = playerChoice;    
            playRound(playerSelection,computerSelection);        
            break;
        case 'paper':
            playerSelection = playerChoice;
            playRound(playerSelection,computerSelection);
            break;
        case 'scissors':
            playerSelection = playerChoice;
            playRound(playerSelection,computerSelection);
            break;
        case 'scissor':
            playerSelection = "scissors";
            playRound(playerSelection,computerSelection);
            break;
        default:
            alert("Please try again! Choose only from Rock, Paper, or Scissors");
            gameStart();
    }
}

function choiceToNumber(choice){
    
    switch(choice) {
        case 'rock':
            return(1);
            break;
        case'paper':
            return(2);
            break;
        case'scissors':
            return(3);
            break;
    }
}

function resultFinal()
{
    switch(result){
        case 1:
            alert("You Won! " + playerSelection + " beats " + computerSelection);
            break;
        case 0:
            alert("TIE!");
            break;
        case -1:
            alert("You Lose!! " + computerSelection + " beats " + playerSelection);
            break;
    }
}

function playRound(playerSelection,computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    let playerNum = choiceToNumber(playerSelection);
    let computerNum = choiceToNumber(computerSelection);

    switch(playerNum - computerNum){
        case -1:
        case 2:
            result = -1;
            break;
        case 0:
            result = 0;
            break;
        case 1:
        case -2:
            result = 1;
            break;          
    }
    console.log(result);
    resultFinal();
}

function gameIntro() {
    alert("You will be playing 5 rounds of Rock, Paper, Scissors");
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        gameStart();
    }
}

gameIntro();