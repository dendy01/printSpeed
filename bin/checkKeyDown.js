import { displayTyping } from "./initTest.js";

export const keyDown = (event) => {
  switch(event.key) {
    case 'Tab':
    case 'CapsLock':
    case 'Shift':
    case 'Control':
    case 'Alt':
      break;

    case 'Backspace':
      displayTyping.mover(-1, 'Backspace');
      break;

    default:
      displayTyping.mover(1, event.key === displayTyping.spans[displayTyping.position].innerText);
      break;
  }
};