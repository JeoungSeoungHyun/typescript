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
        private static BEANS_GRAMM_PER_SHOT:number = 7; 
        private cooffeeBeans:number = 0; 

        public constructor(private coffeeBeans: number, private milk: milkFother, private sugar: SugarMixer){
            this.cooffeeBeans = coffeeBeans;
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
            }
        }

        makeCoffee(shots:number):CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const milkCoffee = this.milk.makeMilk(coffee);
            return this.sugar.addSugar(milkCoffee);
        }
    }

    // 우유 거품기
    interface milkFother {
        makeMilk(cup: CoffeeCup):CoffeeCup;
    }
    class CheapMilkSteamer implements milkFother{
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
    
    class FancyMilkSteamer implements milkFother{
        private steamMilk(): void {
            console.log('Fancy Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements milkFother{
        private steamMilk(): void {
            console.log('Cold Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup):CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements milkFother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    interface SugarMixer{
        addSugar(cup:CoffeeCup):CoffeeCup;
    }
    class CandySugarMixer implements SugarMixer{
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

    class JarSugarMixer implements SugarMixer{
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

    class NoSugar implements SugarMixer {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class LatteMaker extends CoffeMakerImpli{

        constructor(
            private beans:number, 
            public readonly serailNumber: string, 
            private milkFother: milkFother,
            private sugarMixer: SugarMixer
        ){
            super(beans, milkFother, sugarMixer);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeMakerImpli{

        constructor(private beans:number, private milkFother:milkFother, private sugaMixerr:SugarMixer){
            super(beans, milkFother, sugaMixerr);
        }

        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.sugaMixerr.addSugar(coffee);
        }

    }

    class SwettLatteeMaker extends CoffeMakerImpli{
        constructor(private beans:number, private milkFother:milkFother, private sugarMixer:SugarMixer){
            super(beans,milkFother,sugarMixer);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const latte = (this.milkFother.makeMilk(coffee))
            return this.sugarMixer.addSugar(latte);
        }
    }

    // Milk
    const cheapMilkSteamer = new CheapMilkSteamer();
    const fancyMilkSteamer = new FancyMilkSteamer();
    const coldMilkSteamer = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugarMaker = new CandySugarMixer();
    const jarSugarMaker = new JarSugarMixer();
    const noSugar = new NoSugar();

    // 인터페이스 & 콤포지션

    const sweetCandyMachine = new CoffeMakerImpli(12, noMilk, candySugarMaker);
    const sweetJarMachine = new SweetCoffeeMaker(12, noMilk, jarSugarMaker);

    const latteMachine = new LatteMaker(12,'ss',cheapMilkSteamer, noSugar);
    const FancylatteMachine = new LatteMaker(12,'ss',fancyMilkSteamer, noSugar);
    const ColdlatteMachine = new LatteMaker(12,'ss',coldMilkSteamer, noSugar);
    const sweetLatteMachine = new SwettLatteeMaker(12,cheapMilkSteamer,candySugarMaker);
    const sweetLatteMachine2 = new SwettLatteeMaker(12,fancyMilkSteamer,jarSugarMaker);

}