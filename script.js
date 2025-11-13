/*
*********** Shambo ***********

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

- [IF] - The user won, display WINNER.
       - Add +1 to WIN
  [ELSE IF] - Display LOSER.
            - Add +1 to LOSS
  [ELSE] - Answers equal, display [TIE]
         - Add +1 to TIE

- [TRY AGAIN] - Clears the input field.
              - Removes previous user and player choices.
- [RESET] - Resets WIN, LOSE, and TIE back to 0.


*/

function startGame(){
    let player = document.getElementById('userInput').value.toUpperCase(); //Grab users input and changes values to upper case
    console.log('User Input: ' + player); //Checks to see input was grabbed

    let computer;
    const winMessage = document.getElementById("displayWin");
    const loseMessage = document.getElementById("displayLOSE");
    const tieMessage = document.getElementById("displayTie");

    const moves = ['ROCK', 'PAPER', 'SCISSOR']

    

    if (moves.includes(player)){
        console.log('User input validated.');

        computer = moves[Math.floor(Math.random() * moves.length)]
        console.log('Computer Move: ' + computer); 

        // If User is ROCK and Computer is PAPER
        if (player === 'ROCK' && computer === 'PAPER'){
            displayTie.style.display = 'none';
            displayWin.style.display = 'none';
            displayLose.style.display = 'block';
        }
        // If User is ROCK and Computer is SCISSOR
        else if (player === 'ROCK' && computer === 'SCISSOR'){
            displayTie.style.display = 'none';
            displayLose.style.display = 'none';
            displayWin.style.display = 'block';
        }
        // If User is PAPER and Computer is ROCK
        else if (player === 'PAPER' && computer === 'ROCK'){
            displayTie.style.display = 'none';
            displayLose.style.display = 'none';
            displayWin.style.display = 'block';
        }
        // If User is PAPER and Computer is SCISSOR
        else if (player === 'PAPER' && computer === 'SCISSOR'){
            displayTie.style.display = 'none';
            displayWin.style.display = 'none';
            displayLose.style.display = 'block';
        }
        // IF User is SCISSOR and Computer is ROCK
        else if (player === 'SCISSOR' && computer === 'ROCK'){
            displayTie.style.display = 'none';
            displayWin.style.display = 'none';
            displayLose.style.display = 'block';
        }
        // IF User is SCISSOR and Computer is PAPER
        else if (player === 'SCISSOR' && computer === 'PAPER'){
            displayTie.style.display = 'none';
            displayLose.style.display = 'none';
            displayWin.style.display = 'block';
        }
        // Else if User and Computer is equal
        else {
            displayLose.style.display = 'none';
            displayWin.style.display = 'none';
            displayTie.style.display = 'block';
        }


    }else {
        console.log('Enter a valid move (ROCK, PAPER, or SCISSOR)');

        
    }
}
