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

// ==== Variables ====
let player;
let computer;

const moves = ['ROCK', 'PAPER', 'SCISSOR'];

/* 

--- Random choice generator ---
Every time the user hits 'THROW', the computer will generate a random index from the moves array 

*/

// Check: Randomization
console.log(computer);

