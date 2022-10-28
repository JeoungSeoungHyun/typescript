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

    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    // 설탕 제조기
    class AutomaticSugarMixer {
        private getSugar(){
            console.log('Getting some sugar from candy');
        }

        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: true,
            }
        }
    }

    class LatteMaker extends CoffeMakerImpli{

        constructor(
            private beans:number, 
            public readonly serailNumber: string, 
            private milkFother: CheapMilkSteamer
        ){
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeMakerImpli{

        constructor(private beans:number, private sugar:AutomaticSugarMixer){
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }

    }

    class WettLatteeMaker extends CoffeMakerImpli{
        constructor(private beans:number, private milk:CheapMilkSteamer, private sugar:AutomaticSugarMixer){
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const latte = (this.milk.makeMilk(coffee))
            return this.sugar.addSugar(latte);
        }
    }

    const milksteamer = new CheapMilkSteamer;
    const sugarmaker = new AutomaticSugarMixer;
    const machines:CoffeMaker[] = [
        new CoffeMakerImpli(16),
        new LatteMaker(16,'SS', milksteamer),
        new SweetCoffeeMaker(16, sugarmaker),
        new CoffeMakerImpli(16),
        new LatteMaker(16,'SS', milksteamer),
        new SweetCoffeeMaker(16, sugarmaker),
    ];

    machines.forEach(machine =>{
        console.log('===========================');
        machine.makeCoffee(2);
    });
}