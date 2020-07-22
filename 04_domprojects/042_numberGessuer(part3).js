/* 
GAME Functions
- Player must guess a number between a min and max
- Player gets a certain aamount of guesses
- Notify player of guesses remaining
- notify the player of the correct answer if loose
- let player choose to play again
*/ 

// Game Values
let min = 1,
    max = 10, 
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;   
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate 
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
        // guessInput.style.borderColor = 'red';
    }

    //Check if won 
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, You WIN!` )
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // Game Over lost

            gameOver(false, `Game Over, you lost. The correct Number was ${winningNum}`);
        } else {
            // Game continues anserwer wrong
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
            guessInput.style.borderColor = 'red';
            //Clear input 
            guessInput.value = '';
        }
    }
});

//Game Over
function   gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input 
    guessInput.disabled = true;
    // Change border Color 
    guessInput.style.borderColor = color;
    //Text Color
    message.style.color = color;
    // Set message
    setMessage(msg);

}



//Set Message 
function setMessage (msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
 