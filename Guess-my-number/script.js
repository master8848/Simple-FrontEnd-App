'use strict';
let random = Math.ceil(Math.random() * 20);
let score = 20;
let hs = 0;

document.getElementsByClassName('check')[0].addEventListener('click', () => {
  if (!(score < 1)) {
    let gn = document.getElementsByClassName('guess')[0].value;
    if (!gn) {
      document.getElementsByClassName('message')[0].textContent =
        'Please Enter a nmumber';
    } else {
      if (gn > random) {
        document.getElementsByClassName('message')[0].textContent = 'Too high';
        document.getElementsByClassName('score')[0].textContent = --score;
      } else if (gn < random) {
        document.getElementsByClassName('message')[0].textContent = 'Too low';
        document.getElementsByClassName('score')[0].textContent = --score;
      } else {
        document.getElementsByClassName('message')[0].textContent = 'You won';
        document.getElementsByClassName('number')[0].textContent = random;
        document.getElementsByClassName('border')[0].style.borderBottom =
          '60px solid red';

        document.querySelector('body').style.backgroundColor = '#60b347';

        if (hs < score) {
          hs = score;
          document.getElementsByClassName('highscore')[0].textContent = hs;
        }
      }
    }
  } else {
    document.getElementsByClassName('message')[0].textContent = 'You Lost';
  }
});
document.getElementsByClassName('again')[0].addEventListener('click', () => {
  score = 20;
  document.getElementsByClassName('border')[0].style.borderBottom =
    '7px solid #eee';
  document.querySelector('body').style.backgroundColor = '#222';
  document.getElementsByClassName('message')[0].textContent =
    'Start guessing...';
  random = Math.ceil(Math.random() * 20);
  console.log(random);
  document.getElementsByClassName('guess')[0].value = '';
  document.getElementsByClassName('score')[0].textContent = score;

  document.querySelector('.number').textContent = '?';
});
