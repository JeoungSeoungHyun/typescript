{
    
    type CoffeeCup = {
        shots: number;
        hasMilek: boolean;
    };
    
    class CoffeMaker {
        static BEANS_GRAMM_PER_SHOT:number = 7; // class level => 매번 생성되는 상수는 인스턴스가 만들어질때마다 메모리의 낭비가 발생 static으로 지정하여 클래스레벨에서 공유.
        cooffeeBeans:number = 0; // instance (object) level

        constructor(coffeeBeans:number){
            this.cooffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeMaker{ // 클래스 레벨에서 사용하고 싶은 경우는 static을 붙여주면 된다.
            return new CoffeMaker(coffeeBeans);
        }

        makeCoffee(shots:number):CoffeeCup{
    
            if(this.cooffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
    
            this.cooffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
            
            return {
                shots, // 키와 밸류의 이름이 동일하다면 키의 생략이 가능
                hasMilek: false,
            }
        }

    }

    const maker = new CoffeMaker(32);
    const maker2 = new CoffeMaker(14);
    
    console.log(maker);
    console.log(maker2);
}