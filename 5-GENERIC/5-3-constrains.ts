{
    interface Employee{
        pay(): void;
    }

    class FullTimeEmplyee implements Employee {
        pay() {
            console.log('full time!!');
        }
        workFullTime() {

        }
    }
    class PartTimeEmplyee implements Employee {
        pay() {
            console.log('Part time!!');
        }
        workPartTime() {
            
        }
    }

    // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지않다..
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    function pay<T extends Employee>(employee: T): T{
        employee.pay();
        return employee;
    }

    const sh = new FullTimeEmplyee();
    const hs = new PartTimeEmplyee();

    sh.workFullTime();
    hs.workPartTime();

    const shAfterPay = payBad(sh) as FullTimeEmplyee; // 이런 방식으로 리턴타입 지정이 가능(확실한 경우에만 사용. 좋지는 않다.)
    const hsAfterPay = payBad(hs);

    const shAfterPayT = pay(sh);
    const hsAfterPayT = pay(hs);

    shAfterPay.pay();

    const obj = {
        name: 'sh',
        age: 20,
    };

    console.log(Object.keys(obj));
    console.log(Object.values(obj));

    function getValue<O, A extends keyof O>(obj:O, attr:A): O[A]{
        return obj[attr];
    }

    console.log(getValue(obj, 'name')); // ellie
}