import { PrintTextBuilder } from "../bin/printTextBuilder";
import { LoremApi } from "../bin/loremApi";
import { DisplayTyping } from './displayTyping.js';
import { run ,timer } from '../bin/runTest.js';
import { renderHTML } from "../src/utils.js";

renderHTML();

let displayTyping = new DisplayTyping(document.body);

async function initTest() {
  clearInterval(timer);
  const printText = document.body.querySelector('p');
  printText.innerText = '';

  const loremApi = new LoremApi(5, displayTyping.LevelTestPrint);

  displayTyping.btn.disabled = true;
  const lorem = await loremApi.text();
  displayTyping.btn.disabled = false;
  displayTyping.levelTestPrint.blur();

  const printTextBuilder = new PrintTextBuilder(lorem, printText);
  printTextBuilder.build();

  displayTyping = new DisplayTyping(document.body);

  document.addEventListener('keydown', run);
}

export { initTest, displayTyping };