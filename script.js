//naming all variables
const rockbutton = document.getElementById('rockbtn');
const paperbutton = document.getElementById('paperbtn');
const scissorsbutton = document.getElementById('scissorsbtn');
const who = document.getElementById('who');
const desc = document.getElementById('desc');
const playerpoint = document.getElementById('playerpoint');
const computerpoint = document.getElementById('computerpoint');

rockbutton.addEventListener('click', ()=> handleClick('ROCK'));
paperbutton.addEventListener('click', ()=> handleClick('PAPER'));
scissorsbutton.addEventListener('click', ()=> handleClick('SCISSORS'));

//main function to run everything when you click the button
function handleClick(playerSelection)
{
    const computerSelection = randomPick();

    playGame(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

//top2 main function which contain every functions to decide the winner, counting the score, updating the status
function playGame(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        roundWinner = 'tie';
    }

    else if (    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') )
    {
        roundWinner = 'player';
        playerScore++;
    }

    else if (    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') )
    {
        roundWinner = 'computer';
        computerScore++;
    }

    updateScore(roundWinner);
    updateDescription(roundWinner, playerSelection, computerSelection);
    updateEmoji(playerSelection, computerSelection);
}


function updateEmoji(playerSelection, computerSelection)
{
    switch (playerSelection)
    {
        case 'ROCK': playerchoice.textContent = '✊'
        break;

        case 'PAPER': playerchoice.textContent = '✋'
        break;

        case 'SCISSORS': playerchoice.textContent = '✌'
        break;        
    }

    switch (computerSelection)
    {
        case 'ROCK': computerchoice.textContent = '✊'
        break;

        case 'PAPER': computerchoice.textContent = '✋'
        break;

        case 'SCISSORS': computerchoice.textContent = '✌'
        break;        
    }
}

function updateScore()
{   
    if (roundWinner === 'tie')
    {
        who.textContent = "Tied!";
    }
    else if  (roundWinner === 'player')
    {
        who.textContent = "Player win!";
    }
    else if (roundWinner === 'computer')
    {
        who.textContent = "Computer win!";
    }

    playerpoint.textContent = `Player: ${playerScore}`;
    computerpoint.textContent = `Computer: ${computerScore}`;

}

function updateDescription(roundWinner, playerSelection, computerSelection)
{
    if (roundWinner === 'player')
    {
        desc.textContent = `Player used ${playerSelection} and it's effective against Computer ${computerSelection}`;
    }

    else if (roundWinner === 'computer')
    {
        desc.textContent = `Computer used ${computerSelection} and it's effective against Player ${playerSelection}`;
    }

    else if (roundWinner === 'tie')
    {
        desc.textContent = `Player used ${playerSelection} and it got same power attack as Computer ${computerSelection} `;
    }
}

//random math of 0 until 0.9999 which multiplied by integer number equal to integer
function randomPick()
{
    let randomPick = Math.floor(Math.random() * 3);

    switch (randomPick)
    {
        case 0: return "ROCK";
        case 1: return "PAPER";
        case 2: return "SCISSORS";
    }
}



