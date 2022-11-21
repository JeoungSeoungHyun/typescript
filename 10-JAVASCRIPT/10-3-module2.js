import sum, { print as printMessage } from './10-3-module1.js'; // default로 import하는 경우 이름 변경이 가능

// console.log(sum(1, 2));
// printMessage();

import * as calculator from './10-3-module1.js';

console.log(calculator.default);
calculator.print();
calculator.number;