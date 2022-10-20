{
    /**
     *  Type Inference(타입 추론)
     *  간편하긴 하지만 함수의 경우 로직이 복잡해지는 경우 실제로 추론하기가 힘들기 때문에 직접 리턴타입을 명시해주는 습관을 들이는 것이 좋다.
     *  이러한 부분은 협업시 일관성과 가독성을 생각하여 정하는 것이 좋다. 어떤 것은 생략하고 어떤 것은 명시한다. 
     */

    let text = 'hello';

    function print(message: string = 'hello'){
        console.log(message);
    };

    print('hello');
    
    function add(x:number, y:number):number{
        return x+y;
    };

    const result = add(1,2);

}