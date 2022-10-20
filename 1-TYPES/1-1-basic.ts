{
    // JavaScript
    // old : var - 재할당이 가능 => 호이스팅과 예상치 못한 문제가 발생하여 사용하지 않으면 좋음.
    var age1 = 5;
    age1 = 1;

    // let - 재할당이 가능 => es6부터 도입
    let name1 = 'hello';
    name1 = 'hi'

    // const - 재할당이 불가능(값이 고정)
    const age2 = 5;

    /**
     * JavaScript
     * Primitive Type : number, string, boolean, bigint=>number보다 더 큰 숫자 / symbol, null, undefiend
     * Object Type : Primitive 제외 function, array ....
     */

    // number 
    const num: number = -6;

    // string 
    const str:string = 'hello';

    // boolean
    const bool:boolean = false;

    // undefiend => 값이 비었는지 비지 않았는지 결정되지 않은 상태
    let name: undefined; // 이렇게 단독적으로 사용하지는 않음 => undefined만 들어갈 수 있기 때문에
    let age: number | undefined // 타입을 | 로 여러개 할당 할 수 있다.
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return 1;

    }

    // null => 값이 비어있음
    let person: null; // 이렇게 단독적으로 사용하지는 않음 => null만 들어갈 수 있기 때문에
    let person2: string | null;

    // unknown => 어떤 타입이 담길지 알 수 없다. => 가능하면 사용하지 않도록 하자.(타입이 없는 자바스크립트와 연동하는 경우 사용)
    let notSure : unknown = 0;
    notSure = 'he';
    notSure = true;

    // any => 어떤 타입이든 담길 수 있다. => 가능하면 사용하지 않도록 하자.
    let anything: any = 0;
    anything = 'he';
    anything = true;

    // void => void의 경우 생략가능 => 리턴값이 없는 경우 사용
    function print(): void {
        console.log('hello');
        return ;
    }
    let unusable: void = undefined; // => 이렇게 사용하지 않음

    // never => 리턴 할 계획이 전혀 없음을 명시해주는것? => error를 던지든지 while문을 통해 끝나지 않도록 코드를 작성해줘야한다.
    function throwError(message: string): never {
        // meesage -> server (log남기기)
        throw new Error(message);
        // 위에서 함수가 끝나버리기 때문에 밑에 while문은 도달 할 수가 없다. 그러므로 희미하게 코드가 표시됨.
        while(true){ 

        }        
    }
    let newverEnding: never; // => 이렇게 사용은 할리가 없다

    // object => 이것도 아래와 같이 모든 object type을 담을 수 있기 때문에 사용하지 않는 편이 좋다.
    let obj: object = [1,4];
    function acceptSomeObject(obj: object){

    }
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
}   