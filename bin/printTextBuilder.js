export class PrintTextBuilder {
  constructor(lorem, printText) {
    this.lorem = lorem;
    this.printText = printText;
  }

  build() {
    [...this.lorem].forEach(char => {
      const span = document.createElement('span');
    
      span.innerText = char;
    
      this.printText.append(span);
    });
  }
}