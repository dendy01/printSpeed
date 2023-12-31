import { PrintTextBuilder } from "../bin/printTextBuilder";
import { LoremApi } from "../bin/loremApi";
import { DisplayTyping } from './displayTyping.js';
import { run, timer } from './runTest.js';
import { renderHTML } from "../src/utils.js";
import { keyDown } from "./checkKeyDown.js";

renderHTML();

let displayTyping = new DisplayTyping(document.body);

async function initTest() {
  clearInterval(timer);
  const printText = document.body.querySelector('p');
  printText.innerText = '';

  const loremApi = new LoremApi(5, displayTyping.LevelTestPrint);

  displayTyping.btnStart.disabled = true;
  displayTyping.btnStop.disabled = true;
  const lorem = await loremApi.text();
  displayTyping.btnStart.disabled = false;
  displayTyping.btnStop.disabled = false;
  displayTyping.levelTestPrint.blur();

  const printTextBuilder = new PrintTextBuilder(lorem, printText);
  printTextBuilder.build();

  displayTyping = new DisplayTyping(document.body);

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keydown', run);
}

export { initTest, displayTyping };