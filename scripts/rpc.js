// const score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
// };

//const score = JSON.parse(localStorage.getItem('score'));



let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = { 
        wins: 0, 
        losses: 0, 
        ties: 0 
    };
    localStorage.setItem('score', JSON.stringify(score));
}

let sub = JSON.parse(localStorage.getItem('sub'));
if (!sub) {
    sub = false;
    localStorage.setItem('sub', JSON.stringify(sub));
}

function subscribe() {
    sub = !sub;
    localStorage.setItem('sub', JSON.stringify(sub));
    if(sub) {
        document.getElementById("sub").innerText = `Unsubscribe`;
    }
    else {
        document.getElementById("sub").innerText = `Subscribe`;
    }
    
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    displayScore();
}

function displayScore() {
    document.getElementById("score-display").innerText =
    `Wins: ${score.wins} - Losses: ${score.losses} - Ties: ${score.ties}`;
}

function rpsGame(playerMove) {
    const randomNum = Math.random();
    let computerMove = '';
    if (randomNum >= 0 && randomNum < 1/3) 
        computerMove = 'rock';
    else if (randomNum >= 1/3 && randomNum < 2/3)  
        computerMove = 'paper';
    else 
        computerMove = 'scissors';

    console.log(computerMove)

    let result = '';

    if(computerMove === playerMove) {
        result = 'Tie';
        score.ties++;
    }
    else if (
        (computerMove === 'paper' && playerMove === 'scissors') ||
        (computerMove === 'scissors' && playerMove === 'rock') ||
        (computerMove === 'rock' && playerMove === 'paper')
    ) {
        result = 'Win';
        score.wins++;
    }
    else {
        result = 'Loss'
        score.losses++;            
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Comp picked ${computerMove}. This is a ${result}`);
    displayScore();
}
document.addEventListener("DOMContentLoaded", () => {
    displayScore();
    document.getElementById("sub").innerText = sub ? "Unsubscribe" : "Subscribe";
});
