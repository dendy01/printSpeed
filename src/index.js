import { random } from './utils.js';
import '../style/style.scss';
import { CursorPositioner } from '../bin/cursorPositioner.js';
import { DisplayTyping } from '../bin/displayTyping.js';

const btn = document.body.querySelector('.btn');
const displayTyping = new DisplayTyping(document.body);

let currentTime = 60;
let timer;
let spans = document.body.querySelectorAll('span');
let cursorPositioner = new CursorPositioner(spans);

btn.addEventListener('click', initTest);

await initTest();

function keyDown(event) {
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
  let expiringTime = currentTime;

  document.removeEventListener('keydown', run);
  document.addEventListener('keydown', keyDown);

  setTimeout(async () => {

    document.removeEventListener('keydown', keyDown);

  }, expiringTime * 1000);

  timer = setInterval(() => {
    if (expiringTime > 0) {
      expiringTime--;

      displayTyping.time.innerText = expiringTime;
      return;
    }

    clearInterval(timer);
  }, 1000);
}

async function initTest() {
  clearInterval(timer);
  displayTyping.p.innerHTML = '';
  displayTyping.correctCharacters.innerText = 0;
  displayTyping.errorCharacters.innerText = 0;
  displayTyping.time.innerText = currentTime;

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

