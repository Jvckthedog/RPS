console.log("hello World") 
console.log (" "); 

// Event Listeners 
let humanClick = "";
let btnContainer = document.querySelector('#btnContainer');
let computerInput = document.querySelector('#computerContainer');
let whoWon = document.querySelector(`#whoWonContainer`);
let restartBtn = document.querySelector('#restartBtn');

const btnR = document.querySelector('.btnR');
btnR.addEventListener('click', (playRound) => {
    humanClick = "rock";
}); 
const btnP = document.querySelector('.btnP');
btnP.addEventListener('click', (playRound) => {
    humanClick = "paper";
}); 
const btnS = document.querySelector('.btnS');
btnS.addEventListener('click', (playRound) => {
    humanClick = "scissors";
});

// RPS Code
function getHumanChoice() {
    btnContainer.addEventListener('click', () => {
    console.log("Human Choice:", humanClick);
    return humanClick; 
    });
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Its a Tie!");
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        alert("Human Wins!");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        alert("Human Wins!");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        alert("Human Wins!");
    } else {
        alert("Computer Wins...");
    }
};

btnContainer.addEventListener('click', ()=> {
    computerInput.textContent = (`Computer Choose: ${computerChoice}`);
    console.log("Computer Choose:", computerChoice);
    playRound(humanClick, computerChoice); 
});

restartContainer.addEventListener('click', () => {
    location.reload();
})










