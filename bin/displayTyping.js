class DisplayTyping {
  constructor(body) {
    this.spans = body.querySelectorAll('.content span');
    this.time = body.querySelector('.time b');
    this.correctCharacters = body.querySelector('.right b');
    this.errorCharacters = body.querySelector('.error b');
    this.precisionClicks = body.querySelector('.precision b');
    this.levelTestPrint = body.querySelector('.level');
    this.btnStart = body.querySelector('.btnStart');
    this.btnStop = body.querySelector('.btnStop');
    this.inputNameUser = body.querySelector('.inputNameUser');
    this.reset();
  }

  increazeCorrectPosition() {
    this.correctClick += 1;
    this.correctCharacters.innerText = this.correctClick;
    this.spans[this.position].classList.remove('underscore');
    this.spans[this.position].classList.add('correct');
    this.position += 1;
    this.spans[this.position].classList.add('underscore');
  }

  increazeIncorrectPosition() {
    this.incorrectClick += 1;
    this.errorCharacters.innerText = this.incorrectClick;
    this.spans[this.position].classList.remove('underscore');
    this.spans[this.position].classList.add('incorrect');
    this.position += 1;
    this.spans[this.position].classList.add('underscore');
  }

  decreasePosition() {
    if (this.position < 1) {
      this.position = 0;
    } else {
      this.spans[this.position].classList.remove('underscore');
      this.position -= 1;
      this.spans[this.position].classList.remove('correct', 'incorrect');
      this.spans[this.position].classList.add('underscore');
    }
  }

  decreaseTime() {
    this.currentTime -= 1;
  }

  setNeatClicks() {
    if (this.correctClick === 0 && this.correctClick === 0) {
      this.precisionClicks.innerText = 0;
    } else {
      this.precisionClicks.innerText = ((this.correctClick * 100) / (this.correctClick + this.incorrectClick)).toFixed(2);
    }
  }

  reset() {
    this.correctClick = 0;
    this.incorrectClick = 0;
    this.position = 0;
    this.currentTime = 60;
    this.time.innerText = 60;
    this.correctCharacters.innerText = 0;
    this.errorCharacters.innerText = 0;
    this.precisionClicks.innerText = 0;
    this.inputNameUser.value = '';
  }

  get LevelTestPrint() {
    return this.levelTestPrint.value;
  }
}

export { DisplayTyping };