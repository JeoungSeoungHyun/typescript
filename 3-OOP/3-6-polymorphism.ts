{
    
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };
    
    interface CoffeMaker {
        makeCoffee(shost: number): CoffeeCup;
    }
    
    class CoffeMakerImpli implements CoffeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level => 매번 생성되는 상수는 인스턴스가 만들어질때마다 메모리의 낭비가 발생 static으로 지정하여 클래스레벨에서 공유.
        private cooffeeBeans:number = 0; // instance (object) level

        //  커피머신을 만드는 function을 만드는 경우 function을 사용하도록 하기 위해 constructor에 접근이 불가능하게 만들어준다.
        public constructor(coffeeBeans:number){
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
                hasMilk: false,
            }
        }
        makeCoffee(shots:number):CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    const maker:CoffeMakerImpli = CoffeMakerImpli.makeMachine(32);
    const maker2:CoffeMaker = CoffeMakerImpli.makeMachine(32);

    class LatteMaker extends CoffeMakerImpli{

        constructor(beans:number, public readonly serailNumber: string){
            super(beans);
        }

        private steamMilk(){
            console.log('Steaming some milk....');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return{
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeMakerImpli{

        constructor(private beans:number){
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            }
        }

    }

    const machines:CoffeMaker[] = [
        new CoffeMakerImpli(16),
        new LatteMaker(16,'SS'),
        new SweetCoffeeMaker(16),
        new CoffeMakerImpli(16),
        new LatteMaker(16,'SS'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machine =>{
        console.log('===========================');
        machine.makeCoffee(2);
    });
}