{
    /**
     *  Type Assertions => 컴파일 시점의 타입을 변경시키는것.
     *  => 사용하지 않는 편이 좋다. => 코드 작성 중에는 잘못된 경우를 확인 할 수 없다.
     *  => runtime error 가 발생 할 수 있다.
     */

    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const worng: any = 5;
    console.log((worng as Array<number>).push(1));

    function findNumbers (): number[] | undefined {
        return undefined;
    }

    // undefined가 되지 않는다는 것을 장담하는 !
    const numbers = findNumbers()!;
    numbers!.push(2);

    const button = document.querySelector('class')!;
}