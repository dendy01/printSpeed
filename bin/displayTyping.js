class DisplayTyping {
  constructor(body) {
    this.p = body.querySelector('.wrapper p');
    this.time = body.querySelector('.time b');
    this.correctCharacters = body.querySelector('.right b');
    this.errorCharacters = body.querySelector('.error b');
  }

  
}

export { DisplayTyping };