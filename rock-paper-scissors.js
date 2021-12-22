const rock = 1;
const paper = 2;
const scissors = 3;

function computerPlay(){
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerSelectionValue(playerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        return rock;
    }
    if(playerSelection.toLowerCase() == "paper"){
        return paper;
    }
    if(playerSelection.toLowerCase() == "scissors"){
        return scissors;
    }
    return 0;
}

function playRound(playerSelection, computerSelection) {
    playerSelectionValue = getPlayerSelectionValue(playerSelection);
    switch (playerSelectionValue) {
        case rock:
            switch (computerSelection) {
                case rock:
                    return "It's a tie! You both chose rock.";
                case paper:
                    return "You lose! Paper beats rock.";
                case scissors:
                    return "You win! Rock beats scissors.";
            }
        
        case paper:
            switch (computerSelection) {
                case rock:
                    return "You win! Paper beats rock.";
                case paper:
                    return "It's a tie! You both chose paper.";
                case scissors:
                    return "You lose! Scissors beats paper.";
            }

        case scissors:
            switch (computerSelection) {
                case rock:
                    return "You lose! Rock beats scissors.";
                case paper:
                    return "You win! Scissors beats paper.";
                case scissors:
                    return "It's a tie! You both chose scissors.";
            }
        default:
            return "Invalid player selection";
    }

}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
  
game();