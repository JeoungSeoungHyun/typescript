const x = {}; // 기본적으로 proto 타입을 상속한다. 
const y = {}; // 아무런 내용이 없더라도 기본적인 toString과 같은 함수의 사용이 가능해진다.
console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__); // object라는 같은 proto 타입을 상속

const array = [];
console.log(array); // array라는 proto 타입을 상속  array proto 타입은 object라는 proto 타입을 상속 결국 모든 것은 object proto 타입을 상속하게 된다.

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
        // console.log(`making... coffee`);
    // }
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log(`making... coffee`);
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // LatteMachine에서 CoffeeMachine의 상속이 가능

const latteMachine = new LatteMachine(123);

console.log(latteMachine);
latteMachine.makeCoffee();