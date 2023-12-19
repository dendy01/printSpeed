import { random } from "../src/utils";

export class LoremApi {
  constructor(paras = 3, level) {
    console.log(level);
    this.paras = paras;
    this.type = 'all-meat';
    this.startWithLorem = 1;
    this.format = 'html';
    this.level = level;
  }

  async text() {
    const response = await fetch(
      `https://baconipsum.com/api/?type=${this.type}&paras=${this.paras}&start-with-lorem=${this.startWithLorem}&format=${this.format}`
      );

    let content = await response.text();

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, 'text/html');
    const paragraphs = [...htmlDoc.querySelectorAll('p')].map(p => p.innerText.toLowerCase().trim());

    let randomParagraphs = new Array(this.level);

    for (let i = 0; i < this.level; i += 1) {
      randomParagraphs.push(paragraphs.splice(random(paragraphs.length), 1));
    }

    randomParagraphs.shift();

    const lorem = randomParagraphs.join('');

    return lorem;
  }
}