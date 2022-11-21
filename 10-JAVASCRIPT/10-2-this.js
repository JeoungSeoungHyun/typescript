console.log(this); // window

function simpleFunc() {
    console.log(this);
}

window.simpleFunc(); // 함수를 쓰는건 window.이 생략된 것
console.clear();
class Counter {
    count = 0;
    increase = function() { // 람다식을 사용하면 bind를 사용하지 않아도 선언당시에 context를 유지하게 된다.
        console.log(this);
    };
}

const counter = new Counter();
counter.increase(); // Count

const caller = counter.increase.bind(counter); // 문맥에 따라 this가 변하기 때문에 고정시키기 위해서는 bind로 묶어줘야 한다.

// const caller = counter.increase; // let과 const로 선언한 변수는 window에 등록되어 있지 않기 때문에 undefined가 된다.
caller();                        // var는 window에 등록이 된다.

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob