import { keyDown } from "./checkKeyDown.js";
import { displayTyping } from "./initTest.js";

let timer;

const run = () => {
  const time = document.body.querySelector('.time>span b');

  displayTyping.btnStart.addEventListener('mousedown', e => e.preventDefault());
  document.removeEventListener('keydown', run);

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

export { timer, run };