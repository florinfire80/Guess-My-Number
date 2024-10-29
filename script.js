'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setSecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const applyStyles = function (backgroundColor, width) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = width;
};

// Add event listener on button .click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    setSecretNumber(secretNumber);

    applyStyles('#60b347', '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

// Add event listener on button .again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setSecretNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  setScore(score);
});

/*
========Varianta initiala================
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setSecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const applyStyles = function (backgroundColor, width) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = width;
};

// Add event listener on button .click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.number').textContent = secretNumber;
    setSecretNumber(secretNumber);

    // document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';
    applyStyles('#60b347', '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      //   document.querySelector('.score').textContent = score;
      setScore(score);
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      //   document.querySelector('.score').textContent = 0;
      setScore(0);
    }
  }
  // Am refactorizat ce e in comentariu mai jos si am inlocuit cu "When guess is wrong"
  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

});

// Add event listener on button .again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.number').textContent = '?';
  setSecretNumber('?');
  //   document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.number').style.width = '15rem';
  applyStyles('#222', '15rem');

  document.querySelector('.guess').value = '';

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  score = 20;
  //   document.querySelector('.score').textContent = score;
  setScore(score);
});

*/
