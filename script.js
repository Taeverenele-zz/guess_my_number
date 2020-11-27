'use strict';

let score = 20;
let highScore = 0;

const displayMessage = (msg) => {
  document.querySelector('.message').textContent = msg;
}
const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = randomNumber();

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    // when there is no input
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    // when player wins
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) { // when guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!': '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lose!');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = randomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
