class CursorPositioner {
  constructor(spans) {
    this.reset();
    this.spans = spans;
  }

  previous() {
    if (this.currentPosition < 1) {
      this.reset();
      return;
    }

    this.nextPosition = this.currentPosition;
    this.currentPosition--;
    this.previousPosition = this.currentPosition - 1;
  }

  next() {
    if (this.currentPosition < this.spans.length - 1) {
      this.previousPosition = this.currentPosition;
      this.currentPosition++;
      this.nextPosition = this.currentPosition + 1;
    }
  }

  reset() {
    this.currentPosition = 0;
    this.previousPosition = -1;
    this.nextPosition = 1;
  }

  get previousSpan() {
    if (this.previousPosition < 0) {
      return this.spans[this.currentPosition];
    }

    return this.spans[this.previousPosition];
  }

  get nextSpan() {
    if (this.nextPosition >= this.spans.length - 1) {
      return this.spans[this.currentPosition];
    }

    return this.spans[this.nextPosition];
  }

  get CurrentChar() {
    return this.CurrentSpan.innerText;
  }

  get CurrentSpan() {
    return this.spans[this.currentPosition];
  }
}

export { CursorPositioner };