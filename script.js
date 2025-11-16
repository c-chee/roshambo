/*
********************** Roshambo ********************************

LOGIC:
- [USER] Input field
  User enters thier choice of either ROCK, PAPER, OR SCISSOR.

- Convert users input to all caps.
  (Caps allows the users input to match no matter how they capitalize)

- User hits [GO]

- Validate if the users input equals either ROCK, PAPER, OR SCISSOR.
  [YES] - Triggers the computer to generate a random number to index 
          from the moves array.
        - Continues to comparing section. 
  [NO] - Prompt user to re-type a valid field.

- Compare user and computers choices.
  Rules:
            ROCK > SCISSOR
            PAPER > ROCK
            SCISSOR > PAPER
            EQUALS

- [IF] - Display LOSER.
            - Add +1 to LOSS
  [ELSE IF] - The user won, display WINNER.
       - Add +1 to WIN
  [ELSE] - Answers equal, display [TIE]
         - Add +1 to TIE

- [TRY AGAIN] - Clears the input field.
              - Removes previous user and player choices.
- [RESET] - Resets WIN, LOSE, and TIE back to 0.

*****************************************************************
*/

// --- Declared Vaiables ----
let input; //Used for if the player decides to input thier move
let player; // Used to hold the players move
let computer; // Will be used to hold the computers move

// Declare and Iniitialize scores at game 0
let playerScore = 0;
let computerScore = 0;

// Grabs and links the score elements from html 
let playerScoreDisplay = document.getElementById('displayPlayerScore');
let computerScoreDisplay = document.getElementById('displayComputerScore');

// Grabs and links the computers move display from html 
let computerMoveDisplay = document.getElementById('displayComputerMove');

//Array containg the moves
const moves = ['ROCK', 'PAPER', 'SCISSOR'];
const patrickMoves = ['ROCK', 'PAPER'];
const mrcrabsMoves = ['SCISSOR'];


// Messsages to be displayed under certain conditions
const winMessage = document.getElementById('displayWin');
const loseMessage = document.getElementById('displayLose');
const tieMessage = document.getElementById('displayTie');
const errorMessage = document.getElementById('displayError');


// === Game Round Reset ===
// Added for easier game play, clears moves selections automatically after each round
function resetRound() {
    setTimeout(() => {
        // resets the ccomputer to thinking
        computerMoveDisplay.innerHTML = '...';

        // Clears wiin/lose messsages
        winMessage.style.display = 'none';
        loseMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        console.log("Selections reset.");
    }, 2000); // 2 seconds
}

// ===== Logic function ======
function logicCondition() {

    // --- If Player has a valid move ---
    // Validates the players move. Check and see if it is one of the 3 in the moves array.
    if (moves.includes(player)){
        console.log('User input validated.');

        // Randomization for computer move from move array
        computer = moves[Math.floor(Math.random() * moves.length)]
        console.log('Computers Move: ' + computer); 

        // Clear win/lose displays initially
        winMessage.style.display = 'none';
        loseMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'none';


        // --- Player Lose Conditions ---
        if ((player === 'ROCK' && computer === 'PAPER') ||
            (player === 'PAPER' && computer === 'SCISSOR') ||
            (player === 'SCISSOR' && computer === 'ROCK')){

                computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move

                loseMessage.style.display = 'block'; // Lose Message
                console.log('You Lose!');

                computerScore++ // Computer gets a point

                // Update Score
                playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
                computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

                resetRound()

        }
        // --- Player Win Conditios ---
        else if ((player === 'ROCK' && computer === 'SCISSOR') ||
                 (player === 'PAPER' && computer === 'ROCK') ||
                 (player === 'SCISSOR' && computer === 'PAPER')){

                    computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move
                    
                    winMessage.style.display = 'block'; //Win Message
                    console.log('You Win!');

                    playerScore++; // Player gets a point

                    // Update Score
                    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
                    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

                    resetRound()

        }
        // --- Tie Conddition ---
        // Else, User and Computer equals
        else {

            computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move

            tieMessage.style.display = 'block'; // Tie Message
            console.log('Tie!');

            // Update Score, no points
            playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
            computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

        }

        // Clears input field
        input.value = '';

        resetRound()

    }
    // --- Else if Player doesn't have a valid move ---
    else { 
        // clears any other messages in screen
        loseMessage.style.display = 'none';
        winMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'block';

        // Clears input fiels
        input.value = '';

        // Error Messsage
        errorMessage.style.display = 'block';
        console.log('Not a valid move!');
        console.log('Enter a valid move (ROCK, PAPER, or SCISSOR)');

        // Sends/ update the score count
        playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
        computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

    }

}

// ==== Button Moves Selection ====
function rock() {
    // When rock button is pressed, set player too rock automatically
    player = 'ROCK';

    // Solves the missing input error
    input = document.getElementById('userInput');
    input.value = '';

    // Call Logic Function
    logicCondition()
}

function paper() {
    // When paper button is pressed, set player too paper automatically
    player = 'PAPER';

    input = document.getElementById('userInput');
    input.value = '';

    // Call Logic Function
    logicCondition()
}

function scissor() {
    // When scissor button is pressed, set player too scissor automatically
    player = 'SCISSOR';
    input = document.getElementById('userInput');
    input.value = '';

    //Call Logic Function
    logicCondition()
}

// === GO Button ===
// Used for input field
function startGame(){

    player = document.getElementById('userInput').value.toUpperCase(); //Grab users input and changes values to upper case
    console.log('Users Move: ' + player); //Checks to see input was grabbed

    input = document.getElementById('userInput'); //Set the input value from user to input
 
    //call logic condition
    logicCondition()
    
}

// === RESET Button ===
// Resets scores board
function resetScore() {
    // Resets to 0
    playerScore = 0;
    computerScore = 0;

    // Sends the 0 scores to the element were sendding back to the html
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;

    // Updates Html text
    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

    // Clears ant win/loses messages still on page after reset
    winMessage.style.display = 'none';
    loseMessage.style.display = 'none';
    tieMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Clears the computers moves
    computerMoveDisplay.innerHTML = `...`;
}

// === Patrick Mode ===
function patricklogicCondition() {

    // --- If Player has a valid move ---
    // Validates the players move. Check and see if it is one of the 3 in the moves array.
    if (patrickMoves.includes(player)){
        console.log('User input validated.');

        // Randomization for computer move from move array
        computer = moves[Math.floor(Math.random() * moves.length)]
        console.log('Computers Move: ' + computer); 

        // Clear win/lose displays initially
        winMessage.style.display = 'none';
        loseMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'none';


        // --- Player Lose Conditions ---
        if ((player === 'ROCK' && computer === 'PAPER') ||
            (player === 'PAPER' && computer === 'SCISSOR') ||
            (player === 'SCISSOR' && computer === 'ROCK')){

                computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move

                loseMessage.style.display = 'block'; // Lose Message
                console.log('You Lose!');

                computerScore++ // Computer gets a point

                // Update Score
                playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
                computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

                resetRound()

        }
        // --- Player Win Conditios ---
        else if ((player === 'ROCK' && computer === 'SCISSOR') ||
                 (player === 'PAPER' && computer === 'ROCK') ||
                 (player === 'SCISSOR' && computer === 'PAPER')){

                    computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move
                    
                    winMessage.style.display = 'block'; //Win Message
                    console.log('You Win!');

                    playerScore++; // Player gets a point

                    // Update Score
                    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
                    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

                    resetRound()

        }
        // --- Tie Conddition ---
        // Else, User and Computer equals
        else {

            computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move

            tieMessage.style.display = 'block'; // Tie Message
            console.log('Tie!');

            // Update Score, no points
            playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
            computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

        }

        // Clears input field
        input.value = '';

        resetRound()

    }
    // --- Else if Player doesn't have a valid move ---
    else { 
        // clears any other messages in screen
        loseMessage.style.display = 'none';
        winMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'block';

        // Clears input fiels
        input.value = '';

        // Error Messsage
        errorMessage.style.display = 'block';
        console.log('Not a valid move!');
        console.log('Enter a valid move (ROCK, PAPER, or SCISSOR)');

        // Sends/ update the score count
        playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
        computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

    }

}

function startPatrickGame(){

    player = document.getElementById('userInput').value.toUpperCase(); //Grab users input and changes values to upper case
    console.log('Users Move: ' + player); //Checks to see input was grabbed

    input = document.getElementById('userInput'); //Set the input value from user to input
 
    //call logic condition
    patricklogicCondition()
    
}

// === Mr. Crabs Mode ===
function mrCrabsCondition() {

    // --- If Player has a valid move ---
    // Validates the players move. Check and see if it is one of the 3 in the moves array.
    if (mrcrabsMoves.includes(player)){
        console.log('User input validated.');

        // Randomization for computer move from move array
        computer = moves[Math.floor(Math.random() * moves.length)]
        console.log('Computers Move: ' + computer); 

        // Clear win/lose displays initially
        winMessage.style.display = 'none';
        loseMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'none';


        // --- Player Lose Conditions ---
        if ((player === 'ROCK' && computer === 'PAPER') ||
            (player === 'PAPER' && computer === 'SCISSOR') ||
            (player === 'SCISSOR' && computer === 'ROCK')){

                computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move

                loseMessage.style.display = 'block'; // Lose Message
                console.log('You Lose!');

                computerScore++ // Computer gets a point

                // Update Score
                playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
                computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

                resetRound()

        }
        // --- Player Win Conditios ---
        else if ((player === 'ROCK' && computer === 'SCISSOR') ||
                 (player === 'PAPER' && computer === 'ROCK') ||
                 (player === 'SCISSOR' && computer === 'PAPER')){

                    computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move
                    
                    winMessage.style.display = 'block'; //Win Message
                    console.log('You Win!');

                    playerScore++; // Player gets a point

                    // Update Score
                    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
                    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

                    resetRound()

        }
        // --- Tie Conddition ---
        // Else, User and Computer equals
        else {

            computerMoveDisplay.innerHTML = `${computer}`; // Displays computer move

            tieMessage.style.display = 'block'; // Tie Message
            console.log('Tie!');

            // Update Score, no points
            playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
            computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

        }

        // Clears input field
        input.value = '';

        resetRound()

    }
    // --- Else if Player doesn't have a valid move ---
    else { 
        // clears any other messages in screen
        loseMessage.style.display = 'none';
        winMessage.style.display = 'none';
        tieMessage.style.display = 'none';
        errorMessage.style.display = 'block';

        // Clears input fiels
        input.value = '';

        // Error Messsage
        errorMessage.style.display = 'block';
        console.log('Not a valid move!');
        console.log('Enter a valid move (ROCK, PAPER, or SCISSOR)');

        // Sends/ update the score count
        playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
        computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

    }

}

function startMrCrabsGame(){

    player = document.getElementById('userInput').value.toUpperCase(); //Grab users input and changes values to upper case
    console.log('Users Move: ' + player); //Checks to see input was grabbed

    input = document.getElementById('userInput'); //Set the input value from user to input
 
    //call logic condition
    mrCrabsCondition()
    
}
