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

const playerScore = 0;
const computerScore = 0;

function startGame(){
    let player = document.getElementById('userInput').value.toUpperCase(); //Grab users input and changes values to upper case
    console.log('Users Move: ' + player); //Checks to see input was grabbed

    const input = document.getElementById("userInput");

    let computer;
    const winMessage = document.getElementById("displayWin");
    const loseMessage = document.getElementById("displayLose");
    const tieMessage = document.getElementById("displayTie");
    const errorMessage = document.getElementById("displayError");

    const moves = ['ROCK', 'PAPER', 'SCISSOR']


    if (moves.includes(player)){
        console.log('User input validated.');

        computer = moves[Math.floor(Math.random() * moves.length)]
        console.log('Computers Move: ' + computer); 

        winMessage.style.display = "none";
        loseMessage.style.display = "none";
        tieMessage.style.display = "none";
        errorMessage.style.display = "none";

        // If User is ROCK and Computer is PAPER
        if ((player === 'ROCK' && computer === 'PAPER') ||
            (player === 'PAPER' && computer === 'SCISSOR') ||
            (player === 'SCISSOR' && computer === 'ROCK')){

                displayLose.style.display = 'block'; // Lose

                console.log('You Lose!')

        }
        // If User is ROCK and Computer is SCISSOR
        else if ((player === 'ROCK' && computer === 'SCISSOR') ||
                 (player === 'PAPER' && computer === 'ROCK') ||
                 (player === 'SCISSOR' && computer === 'PAPER')){
                    
                    displayWin.style.display = 'block'; //Win

                    console.log('You Win!');

        }
        // Else, User and Computer equals
        else {

            displayTie.style.display = 'block'; //Tie

            console.log('Tie!');

        }

        input.value = "";


    }else {
        console.log('Enter a valid move (ROCK, PAPER, or SCISSOR)');
        displayLose.style.display = 'none';
        displayWin.style.display = 'none';
        displayTie.style.display = 'none';
        errorMessage.style.display = 'block';

        console.log('Not a valid move!');
    }
}
