const choices = ['rock', 'paper', 'scissor']
const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let ps = 0;
let cs = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ''

    if (playerChoice === computerChoice) {
        result = `IT'S A TIE`;
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissor') ? 'YOU WON!' : 'YOU LOSE!';
                break;
            case 'scissor':
                result = (computerChoice === 'paper') ? 'YOU WON!' : 'YOU LOSE!';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'YOU WON!' : 'YOU LOSE!';
                break;
        }
    }


    playerChoiceDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText');

    switch (result) {
        case 'YOU WON!':
            resultDisplay.classList.add('greenText');
            ps++;
            playerScore.textContent = ps;
            break;
        case 'YOU LOSE!':
            resultDisplay.classList.add('redText');
            cs++;
            computerScore.textContent = cs;
            break;
    }
}