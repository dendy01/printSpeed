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
      displayTyping.decreasePosition();
      break;

    case displayTyping.spans[displayTyping.position].innerText:
      displayTyping.increazeCorrectPosition();
      break;

    default:
      displayTyping.increazeIncorrectPosition();
      break;
  }
};