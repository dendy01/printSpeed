import { PrintTextBuilder } from "./PrintTextBuilder.js";
import { DisplayTyping } from "./displayTyping.js";
import { LoremApi } from "./LoremApi.js";
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

  const printTextBuilder = new PrintTextBuilder(lorem, printText);
  printTextBuilder.build();

  displayTyping = new Proxy(new DisplayTyping(document.body), {
    get(target, prop) {
      return target[prop];
    },

    set(target, prop, newValue) {
      if (prop === 'position') {
        if (target.isTrueContinue === 'Backspace') {
          target[prop] = newValue;
          target.decreasePosition();
        } else {
          if (target.isTrueContinue) {
            target.increazeCorrectPosition();
          } else {
            target.increazeIncorrectPosition();
          }
        }
      }

      target[prop] = newValue;

      return true;
    }
  });

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keydown', run);
}

export { initTest, displayTyping };