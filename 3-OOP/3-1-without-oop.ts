{
    const BEANS_GRAMM_PER_SHOT:number = 7; // 타입추론이 되기 때무에 적지 않아도 무관하긴하다.
    let cooffeeBeans:number = 0;

    type CoffeeCup = {
        shots: number;
        hasMilek: boolean;
    };

    function makeCoffee(shots:number):CoffeeCup{

        if(cooffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!');
        }

        cooffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        
        return {
            shots, // 키와 밸류의 이름이 동일하다면 키의 생략이 가능
            hasMilek: false,
        }
    }

    cooffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

    const coffee = makeCoffee(2);

    console.log(coffee);
    
}