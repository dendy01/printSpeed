import { displayTyping } from "../src/index.js";

export const keyDown = (event) => {
  switch(event.key) {
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