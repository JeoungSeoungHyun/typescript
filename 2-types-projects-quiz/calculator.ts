/**
 * Let's make a calculator 🧮
 */

type func = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(func:func, num1:number, num2:number): number{
    let result:number;

    switch (func){
        case 'add':
            result = num1 + num2;
            break;
        case 'substract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'remainder':
            result = num1 % num2;
            break;
    }

    return result;
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
