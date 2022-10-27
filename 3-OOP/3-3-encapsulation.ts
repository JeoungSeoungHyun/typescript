{
    
    type CoffeeCup = {
        shots: number;
        hasMilek: boolean;
    };
    
    // public , private , protected
    class CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level => 매번 생성되는 상수는 인스턴스가 만들어질때마다 메모리의 낭비가 발생 static으로 지정하여 클래스레벨에서 공유.
        private cooffeeBeans:number = 0; // instance (object) level

        //  커피머신을 만드는 function을 만드는 경우 function을 사용하도록 하기 위해 constructor에 접근이 불가능하게 만들어준다.
        private constructor(coffeeBeans:number){
            this.cooffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number):CoffeMaker{ // 클래스 레벨에서 사용하고 싶은 경우는 static을 붙여주면 된다.
            return new CoffeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.cooffeeBeans += beans;
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

    //const maker = new CoffeMaker(32);
    const maker = CoffeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);

    class User {
        //private firstName: string;
        //private lastName: string;
        // fullName: string;
        private internalAge = 4;
        constructor(private firstName:string, private lastName:string){
            this.firstName = firstName;
            this.lastName = lastName;
            //this.fullName = `${this.firstName} ${this.lastName}`
        }

        get fullName(): string{
            return `${this.firstName} ${this.lastName}`
        }

        get age(): number{
            return this.internalAge;
        }

        set age(num:number){
            if(num < 0){
                throw new Error('invalid num for age!! age should be greater than 0')
            }
            this.internalAge = num;
        }
    }

    const user = new User('Steve','Jobs');
    console.log(user.age);
    user.age = 60;
    console.log(user);

    // user.firstName = 'SeongHyun'
    console.log(user.fullName); // constructor는 초기 한번만 실행


}