import '../style/style.scss';
import { initTest } from '../bin/initTest.js';

const btn = document.body.querySelector('.btn');

await initTest();

btn.addEventListener('click', initTest);