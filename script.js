'use strict';

let btn = document.querySelector('.check');
let btnAgain = document.querySelector('.again')
let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

btn.addEventListener('click', () => {

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('⛔ No Number!');
       // document.querySelector('.message').textContent = '⛔ No Number!';
    }

    else if (guess === secretNumber) {
        displayMessage('🏆 Correct Number!');
    //document.querySelector('.message').textContent = '🏆 Correct Number!';  
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        
        if(score > 1) {
    //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low';
    displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😢 You lost the Game!');
            //document.querySelector('.message').textContent = '😢 You lost the Game!'
            document.querySelector('.score').textContent = 0;

        }
    }
    
});

btnAgain.addEventListener('click', () => {
     score = 20;
     secretNumber = Math.trunc(Math.random() * 20) + 1;
     displayMessage('Start guessing...');
    //document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})