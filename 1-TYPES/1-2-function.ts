{
    // // JavaScript
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // // TypeScrit
    // function add(num1:number, num2:number): number{
    //     return num1+num2;
    // }

    // // JavaScript
    // function jsFetchNum(id){
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript
    // function fetchNum(id:string):Promise<number>{
    //     //code ....
    //     //code ....
    //     //code ....
    //     return new Promise((resolve, reject)=>{
    //         resolve(100);
    //     })
    // }

    // JavaScript ✨ => TypeScript
    // OPtional parameter(인자를 선택적으로 전달 => 변수 뒤에 ?를 사용한다.)
    // function printName(firstName: string, lastName: string | undefined){ => 이 경우에는 undefined를 전달해주기는 해야한다.
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('SeongHyun') // undefined
    printName('Anna', undefined)

    // Default parameter(인자를 전달하지 않는 경우의 default parameter)
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...numbers:number[]):number{
        let total:number = 0
        for(let number of numbers){
            total += number;
        }
        return total
        // return numbers.reduce((a,b,i,arr)=> {
        //     console.log(a,b,i,arr)
        //     return a+b});
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));

}