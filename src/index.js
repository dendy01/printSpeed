import { random } from './utils.js';
import '../style/style.scss';
import { CursorPositioner } from '../bin/cursorPositioner.js';
import { DisplayTyping } from '../bin/displayTyping.js';


// const p = document.body.querySelector('.wrapper p');
// const time = document.body.querySelector('.time b');
// const right = document.body.querySelector('.right b');
// const error = document.body.querySelector('.error b');
const btn = document.body.querySelector('.btn');
let currentTime = 10;
let expiringTime = currentTime;


const displayTyping = new DisplayTyping(document.body);


let spans = document.body.querySelectorAll('span');
let cursorPositioner = new CursorPositioner(spans);

// document.addEventListener('keydown', run);
btn.addEventListener('click', initTest);

await initTest();

function keyDown(event) {
  console.log(event.key);

  switch(event.key) {
    case 'Backspace':
      cursorPositioner.previousSpan.classList.remove('correct', 'incorrect');
      cursorPositioner.previous();
      cursorPositioner.nextSpan.classList.remove('underscore');
      cursorPositioner.CurrentSpan.classList.add('underscore');
      break;

    case cursorPositioner.CurrentChar:
      +displayTyping.correctCharacters.innerText++;
      cursorPositioner.CurrentSpan.classList.add('correct');
      cursorPositioner.next();
      cursorPositioner.previousSpan.classList.remove('underscore');
      cursorPositioner.CurrentSpan.classList.add('underscore');
      break;

    default:
      +displayTyping.errorCharacters.innerText++;
      cursorPositioner.CurrentSpan.classList.add('incorrect');
      cursorPositioner.next();
      cursorPositioner.previousSpan.classList.remove('underscore');
      cursorPositioner.CurrentSpan.classList.add('underscore');
      break;
  }
}

async function run(event) {
  console.log('run');

  document.removeEventListener('keydown', run);
  document.addEventListener('keydown', keyDown);
  // await initTest();

  setTimeout(async () => {

    document.removeEventListener('keydown', keyDown);
    console.log('stop');

  }, expiringTime * 1000);

  const timer = setInterval(() => {
    if (expiringTime > 0) {
      expiringTime--;

      displayTyping.time.innerText = expiringTime;
      return;
    }

    expiringTime = currentTime;
    clearInterval(timer);
  }, 1000);

}

async function initTest() {
  displayTyping.p.innerHTML = '';
  displayTyping.correctCharacters.innerText = 0;
  displayTyping.errorCharacters.innerText = 0;
  displayTyping.time.innerText = 10;

  const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html');
  let text = await response.text();
  text = text.split('<p>');
  text.shift();
  text = text[random(text.length)].split('</p>')[0];
  text = text.toLowerCase().split('');
  
  text.forEach(span => {
    displayTyping.p.innerHTML += `<span>${span}</span>`;
  });
  spans = document.querySelectorAll('p span');

  cursorPositioner = new CursorPositioner(spans);

  document.addEventListener('keydown', run);
}


//let currentPosition = 0;

// document.addEventListener('keydown', function(event) {
//   const span = document.body.querySelectorAll('span');
  
//   const textSpan = span[currentPosition].innerText;

//   if (event.key === 'Backspace') {

//     currentPosition--; // charPosition.prev();

//     if (currentPosition < 1) {
//       currentPosition = 0;      // charPosition.reset();
//     }

//     span[currentPosition].classList.remove('correct', 'incorrect');
//   } else {
//     if (event.key === textSpan) {
//       span[currentPosition].classList.add('correct');
//       span[currentPosition] = `<u>${span[currentPosition]}</u>`;
//     } else {
//       span[currentPosition].classList.add('incorrect');
//     }
//     currentPosition++; // charPosition.next();
//   }
// });

