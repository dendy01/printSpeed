import '../style/style.scss';
import { renderHTML } from './utils.js';
import { run, timer } from '../bin/runTest.js';
import { DisplayTyping } from '../bin/displayTyping.js';
import { PrintTextBuilder } from "../bin/printTextBuilder";
import { LoremApi } from "../bin/loremApi";

renderHTML();

let displayTyping = new DisplayTyping(document.body);
const btn = document.body.querySelector('.btn');

btn.addEventListener('click', initTest);
btn.addEventListener('mousedown', e => e.preventDefault());

await initTest();

async function initTest() {
  clearInterval(timer);
  const printText = document.body.querySelector('p');
  printText.innerText = '';

  const loremApi = new LoremApi(5, displayTyping.LevelTestPrint);
  const lorem = await loremApi.text();

  const printTextBuilder = new PrintTextBuilder(lorem, printText);
  printTextBuilder.build();

  displayTyping = new DisplayTyping(document.body);

  document.addEventListener('keydown', run);
}

export { displayTyping };
