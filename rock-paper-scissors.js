const rock = 1;
const paper = 2;
const scissors = 3;

function computerPlay(){
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection, computerSelection) {
    let resultsBuffer = document.querySelector("div.results");
    switch (playerSelection) {
        case rock:
            console.log(playerSelection);
            switch (computerSelection) {
                case rock:
                    resultsBuffer.innerHTML = "It's a tie! You both chose rock.!!!";
                    return;
                case paper:
                    resultsBuffer.innerHTML = "You lose! Paper beats rock.";
                    return;
                case scissors:
                    resultsBuffer.innerHTML = "You win! Rock beats scissors.";
                    return;
            }
            return;
        
        case paper:
            console.log(playerSelection);
            switch (computerSelection) {
                case rock:
                    resultsBuffer.innerHTML = "You win! Paper beats rock.";
                    return;
                case paper:
                    resultsBuffer.innerHTML = "It's a tie! You both chose paper.";
                    return;
                case scissors:
                    resultsBuffer.innerHTML = "You lose! Scissors beats paper.";
                    return;
            }
            return;

        case scissors:
            console.log(playerSelection);
            switch (computerSelection) {
                case rock:
                    resultsBuffer.innerHTML = "You lose! Rock beats scissors.";
                    return;
                case paper:
                    resultsBuffer.innerHTML = "You win! Scissors beats paper.";
                    return;
                case scissors:
                    resultsBuffer.innerHTML = "It's a tie! You both chose scissors.";
                    return;
            }
            return;
    }

}

function playRock(e){
    const computerSelection = computerPlay();
    playRound(rock, computerSelection);
}
function playPaper(e){
    const computerSelection = computerPlay();
    playRound(paper, computerSelection);
}
function playScissors(e){
    const computerSelection = computerPlay();
    playRound(scissors, computerSelection);
}

function game(){
    document.querySelector(`button[data-key="Rock"]`).addEventListener('click', function(){playRock()});
    document.querySelector(`button[data-key="Paper"]`).addEventListener('click', function(){playPaper()});
    document.querySelector(`button[data-key="Scissors"]`).addEventListener('click', function(){playScissors()});
}
  
game();