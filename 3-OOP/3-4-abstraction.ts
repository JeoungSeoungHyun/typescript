{
    
    type CoffeeCup = {
        shots: number;
        hasMilek: boolean;
    };
    
    interface CoffeMaker {
        makeCoffee(shost: number): CoffeeCup;
    }
    
    interface CommercialCoffeMaker {
        makeCoffee(shost: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;

    }

    class CoffeMakerImpli implements CoffeMaker, CommercialCoffeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level => 매번 생성되는 상수는 인스턴스가 만들어질때마다 메모리의 낭비가 발생 static으로 지정하여 클래스레벨에서 공유.
        private cooffeeBeans:number = 0; // instance (object) level

        //  커피머신을 만드는 function을 만드는 경우 function을 사용하도록 하기 위해 constructor에 접근이 불가능하게 만들어준다.
        private constructor(coffeeBeans:number){
            this.cooffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeMakerImpli{ // 클래스 레벨에서 사용하고 싶은 경우는 static을 붙여주면 된다.
            return new CoffeMakerImpli(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.cooffeeBeans += beans;
            console.log(`fill coffBean amount of ${beans}`)
        }

        private grindBeans(shots:number){
            console.log(`grinding beans for ${shots}`);
            if(this.cooffeeBeans < shots * CoffeMakerImpli.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.cooffeeBeans -= shots * CoffeMakerImpli.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void{
            console.log(`heating up....`);
        }

        clean():void{
            console.log("cleaning the muchine")
        }

        private extract(shots:number):CoffeeCup{
            console.log(`Pulling ${shots} shots...`)
            return {
                shots, 
                hasMilek: false,
            }
        }
        makeCoffee(shots:number):CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    //const maker = new CoffeMaker(32);
    const maker:CoffeMakerImpli = CoffeMakerImpli.makeMachine(32);
    //maker.fillCoffeeBeans(32); // maker에서 사용할 함수가 너무 많아 인터페이스가 복잡하다.
    //maker.makeCoffee(2);       // 1. 외부에서 접근하지 못하도록 private을 사용(추상화?캡슐화?)
    //maker.clean();             // 2. 인터페이스를 정의한다.
    
    const maker2:CoffeMaker = CoffeMakerImpli.makeMachine(32);
    //maker2.makeCoffee(2);
    
    class AmateurUser {
        constructor(private machine: CoffeMaker){};
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBrista {
        constructor(private machine: CommercialCoffeMaker){};
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker3: CoffeMakerImpli = CoffeMakerImpli.makeMachine(32);
    const amatuer = new AmateurUser(maker3);
    const pro = new ProBrista(maker3);
    amatuer.makeCoffee();
    pro.makeCoffee();
}