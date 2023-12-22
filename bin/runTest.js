import { keyDown } from "./checkKeyDown.js";
import { displayTyping } from "./initTest.js";

let timer;

export const run = () => {
  const time = document.body.querySelector('.time>span b');

  displayTyping.btn.addEventListener('mousedown', e => e.preventDefault());
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