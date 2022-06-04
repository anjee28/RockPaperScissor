const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerSelected = 0;
let computerSelected = 0;
let playerSelection = "qwe";
let computerSelection = "qwe";
let playerScore = 0;
let computerScore = 0;

document.getElementById("btnReset").disabled = true;

rock.addEventListener("click", function (){
    playerSelect(1);
});

paper.addEventListener("click", function (){
    playerSelect(2);
});

scissors.addEventListener("click", function (){
    playerSelect(3);
});

function playerSelect(select) {

    playerSelected = select;
    computerSelected = Math.floor(Math.random() * 3) + 1;    //Gives random number from 1-3
    playerSelection = selection(playerSelected);
    computerSelection = selection(computerSelected);
    document.getElementById("playerSelection").innerHTML = playerSelection;
    document.getElementById("computerSelection").innerHTML = computerSelection;
    playRound(playerSelected,computerSelected);
}

function selection(select) {            //converts number to string
    switch(select) {
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3:
            return("Scissor");
    }
}

function resultFinal()          //Round Result
{
    switch(result){
        case 1:
            document.getElementById("result").innerHTML = "Player Scores! " + playerSelection + " beats " + computerSelection;
            
            break;
        case 0:
            document.getElementById("result").innerHTML = "TIE!";
            break;
        case -1:
            document.getElementById("result").innerHTML = "Computer Scores! " + playerSelection + " beats " + computerSelection;
            break;
    }
}

function playRound(playerSelection,computerSelection) {         //Round Evaluation

    let playerNum = playerSelected;
    let computerNum = computerSelected;

    switch(playerNum - computerNum){
        case -1:
        case 2:
            result = -1;
            computerScore++;
            break;
        case 0:
            result = 0;
            break;
        case 1:
        case -2:
            result = 1;
            playerScore++;
            break;          
    }
    resultFinal();
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('won').innerHTML = "YOU WIN!"
        disableBtn(true);
        document.getElementById("btnReset").disabled = false;
    }
    else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('won').innerHTML = "YOU LOSE!"
        disableBtn(true);
        document.getElementById("btnReset").disabled = false;
    }
}

function disableBtn(state){
    document.getElementById("rock").disabled = state;
    document.getElementById("paper").disabled = state;
    document.getElementById("scissors").disabled = state;
}

function reset() {
    playerSelection = "";
    computerSelection = "";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerSelection").innerHTML = playerSelection;
    document.getElementById("computerSelection").innerHTML = computerSelection;
    document.getElementById("result").innerHTML = "GAME START!";
    disableBtn(false);
    document.getElementById("btnReset").disabled = true;
    document.getElementById('won').innerHTML = ""
}