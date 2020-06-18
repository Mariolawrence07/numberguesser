// Game functions
/* player must guess a number between a min and max
 player gets a certain amount of guesses
 notify player of guesses remaining
 notify the player of the correct answer if loose
 let player choose to play again*/ 


// game values
 let min = 1,
     max = 10,
     winningNum = getRandomNum(min, max),
     guessLeft =3;

    //  ui elements
    const game = document.getElementById('game'),
          minNum = document.querySelector('.min-num'), 
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');
//  assign ui min and max

minNum.textContent = min;
maxNum.textContent = max;


// play again listner

game.addEventListener("mousedown", function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max ) {
     setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won
    if(guess === winningNum){
        // disable-input
        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = 'green';

        setMessage(`${winningNum} is correct, YOU WIN`, 'green');
        guessBtn.value ='playAgain';
        guessBtn.className += 'play-again';

        guessInput.value = '';
    
    }else{
        // wrong number
        guessLeft -= 1;
        if(guessLeft === 0){
            // game over lost
            guessInput.disabled = true;
            // change border color
            guessInput.style.borderColor = 'red';
    
            setMessage(`${winningNum} is correct, YOU LOST`, 'red');
            guessBtn.value = 'playAgain';
            guessBtn.className += 'play-again';
    
        }else{

            // game continues
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessLeft} guesses left`, 'red');
            
            guessInput.value = '';
        }

       };
});
function getRandomNum(){
    return Math.floor(Math.random()*( max-min+1 )+ min);
}

function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}