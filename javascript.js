function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber) {
            case 0: 
                   return "rock";
             case 1:
                return "paper";
             case 2:
                return "scissors";
         }
      }

function playRound(playerSelection, computerSelection) {
                switch(playerSelection.toLowerCase()) {
                    case "rock":
                        if(computerSelection === "rock")
                            return 2;
                        else if(computerSelection === "paper")
                            return 1;
                        else
                            return 0;
                    case "paper":
                        if(computerSelection === "rock")
                            return 0;
                        else if(computerSelection === "paper")
                            return 2;
                        else
                            return 1;
                    case "scissors":
                        if(computerSelection === "rock")
                            return 1;
                        else if(computerSelection === "paper")
                            return 0
                        else
                            return 2;
                }
            }

function game(playerSelection) { 
    const computerSelection = computerPlay();
    switch(playRound(playerSelection, computerSelection)) {
        case 0:
            playerScore++;
            break;
        case 1:
            computerScore++;
            break;
    };
    score.textContent = `Your score ${playerScore} : ${computerScore} Computer score`;


    if(playerScore === 5 || computerScore === 5) //Disable button after 5 wins
    {
        buttons.forEach(button => {
            button.disabled = true;
            //button.style.background = "aquamarine";
            //button.style.border = 0;
        });
        if(playerScore > computerScore)
            score.textContent = `You won! ${playerScore} : ${computerScore}`;
        else
            score.textContent = `You lost! ${playerScore} : ${computerScore}`;
        
    }
}

function reset() {
    buttons.forEach(button => {
        button.disabled = false;
        //button.style.background = "aqua";
        //button.style.border = "solid";
    });    
    playerScore = 0;
    computerScore = 0;
    score.textContent = `Your score ${playerScore} : ${computerScore} Computer score`;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.gameBtn');
buttons.forEach(button => {
    button.addEventListener('click', () => { game(button.id) });
});

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => { reset() });

const score = document.querySelector('.score');



