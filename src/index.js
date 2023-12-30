import '../style/style.scss';
import { displayTyping, initTest } from '../bin/initTest.js';
import { run ,timer } from '../bin/runTest.js';
import { keyDown } from '../bin/checkKeyDown.js';

const btnStart = document.body.querySelector('.btnStart');
const btnStop = document.body.querySelector('.btnStop');
const btnSaveResult = document.body.querySelector('.btnSaveResult');
const btnShowResult = document.body.querySelector('.btnShowResult');
const inputNameUser = document.body.querySelector('.inputNameUser');

await initTest();

btnStart.addEventListener('click', initTest);

btnStop.addEventListener('click', () => {
  clearInterval(timer);
  document.removeEventListener('keydown', run);
  document.removeEventListener('keydown', keyDown);
  displayTyping.setNeatClicks();
});

btnSaveResult.addEventListener('click', () => {
  const nameUser = document.body.querySelector('.inputNameUser').value;

  localStorage.setItem(nameUser, displayTyping.precisionClicks.innerText);
  displayTyping.inputNameUser.value = '';
});

btnShowResult.addEventListener('click', () => {
  const nameUser = document.body.querySelector('.inputNameUser').value;

  alert(`Name: ${nameUser}  Accuracy: ${localStorage.getItem(nameUser)}%`);
  displayTyping.inputNameUser.value = '';
});

inputNameUser.addEventListener('click', () => {
  clearInterval(timer);
  document.removeEventListener('keydown', run);
  document.removeEventListener('keydown', keyDown);
  displayTyping.setNeatClicks();
});