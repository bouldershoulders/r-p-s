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
    let response = prompt(`what's your move   `)
    if (response == 'rock') {
        return 'rock';
    }
    else if (response == 'paper') {
        return 'paper';
    }
    else if (response == 'scissors') {
        return 'scissors';
    }
}
