import { displayTyping } from "../src/index.js";
import { keyDown } from "./checkKeyDown.js";

let timer;

export const run = () => {
  const time = document.body.querySelector('.time>span b');
  const content = document.body.querySelector('.content p');

  document.removeEventListener('keydown', run);
  document.addEventListener('keydown', keyDown);

  timer = setInterval(() => {

    displayTyping.decreaseTime();
    time.innerText = displayTyping.currentTime;

    if (displayTyping.currentTime <= 0) {
      clearInterval(timer);
      document.removeEventListener('keydown', keyDown);
      displayTyping.setNeatClicks();
    }

  }, 1000);
};

export { timer };