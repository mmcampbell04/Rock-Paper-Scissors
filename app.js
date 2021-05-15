let count = 0;
let playerScore = 0;
let computerScore = 0;

let results = document.getElementById("verdict")
const btns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset");


// COMPUTER CHOICE
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const computer = Math.floor(Math.random() * options.length);
    if(computer === 0) {
        return "rock";
    } else if (computer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};


// PLAYER CHOICE
function options (event) {
    playerSelection = (event.target.id);
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    
};

btns.forEach((button) => {
    button.addEventListener("click", options)
    button.classList.add("hover");
});


// UPDATING ROUNDS AND POINTS
function roundCount(){
    count++
    let round = document.querySelector(".counter").textContent = `0${count}`;  
}

function robotWin () {
    computerScore++
    let botScore = document.querySelector(".botScore").textContent = `0${computerScore}`;
    verdict.innerText = "Uh oh, Robot Wins..."
}

function playerWin (){
    playerScore++
    let pScore = document.querySelector(".pScore").textContent = `0${playerScore}`;
    verdict.innerText = "You win!"
}

function tieGame () {
    verdict.innerText = "Tie Game. Try again"
}


// GAME OVER - FIRST TO 5 
function gameOver () {
    if (playerScore === 5) {
    verdict.innerText = "CONGRATULATIONS CHAMPION!"
    verdict.style.color = "#dd1c46";
    removeEffects();    
    }
    
    else if (computerScore === 5) {
    verdict.innerText = "GAME OVER. Bow down to your robot overlords"
    verdict.style.color = "#2f8ee7";
    removeEffects();
    }

};

function removeEffects () {
    btns.forEach(button => {
        button.removeEventListener("click", options)
        button.classList.remove("hover"); 
    })

    resetBtn.classList.add("hover2");

}


// PLAY GAME 
function playRound (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    console.log("TIE!")
    roundCount();
    tieGame();
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("you win")
    playerWin();
    roundCount();
} else if (playerSelection === "rock" && computerSelection == "paper" ) {
    console.log("You lose!")
    robotWin();
    roundCount();
} else if (playerSelection === "paper" && computerSelection === "scissors" ) {
    console.log("Loser!")
    roundCount();
    robotWin();
} else if (playerSelection === "paper" && computerSelection === "rock" ) {
    console.log("you win!")
    roundCount();
    playerWin();
} 
else if (playerSelection === "scissors" && computerSelection === "rock") { 
    console.log("you lose!")
    roundCount();
    robotWin();
} else {
    console.log("you win!")
    roundCount();
    playerWin();
}

gameOver();
    
};


// RESET PAGE

resetBtn.addEventListener("click", newGame);

function newGame () {
    window.location.reload(); 
}


