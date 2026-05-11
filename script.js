// getting random input from computer
function getComputerChoice() {
    let random = (Math.random()*100 )
    if (random<=33){
        return 'rock';
    }
    else if(random<=66) {
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
// getting human choice
function getHumanChoice() {
    return prompt('rock , paper or scissors ?')
}
// keeping scores

const beats = {
    rock : 'scissors' ,
    paper : 'rock' ,
    scissors : 'paper', 
}

 
// to play one round 
function playRound(humanChoice , computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    humanChoice = humanChoice.toLowerCase().trim();
    if (humanChoice === computerChoice) {
        return "it's tie , you both choose the same thing";
    } else if (beats[humanChoice] === computerChoice) {
        humanScore++;
        return `you win ${humanChoice} beats ${computerChoice}`
    } else {
        computerScore++;
        return `you lose ${computerChoice} beats ${humanchoice}`;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0 ; i<5 ; i++ ) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore < computerScore) {
    console.log(`you lost by ${computerScore - humanScore} points.`)
    } else if (humanScore > computerScore) {
            console.log(`you win by ${humanScore -computerScore} points`);
    } else {console.log("it's draw");}
}
playGame();




