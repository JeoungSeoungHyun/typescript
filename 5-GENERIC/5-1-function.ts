{
    function checkNotNullBad(arg: number | null): number{
        if(arg == null){
            throw new Error('not valid number!');
        } 
        return arg;
    }

    // 어떤 타입이든 받을 수 있지만 반환값에 대한 타입 보장이 되지 않는 문제가 발생
    function checkNotNullAnyBad(arg: any | null): any{
        if(arg == null){
            throw new Error('not valid number!');
        } 
        return arg;
    }

    // 제네릭은 사용하는 시점에 타입이 결정된다.
    function checkNotNull<T>(arg: T | null): T{
        if(arg == null){
            throw new Error('not valid number!');
        } 
        return arg;
    }

    function checkNotNullTest<T>(arg: T | null): T{
        if(arg == null){
            throw new Error('not valid number!');
        } 
        return arg;
    }

    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}