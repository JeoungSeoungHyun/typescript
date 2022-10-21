{
    /**
     * Let's make a calculator 🧮
     */

    type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

    function calculate(command:Command, a:number, b:number): number{
        let result:number;

        switch (command){
            case 'add':
                result = a + b;
                break;
            case 'substract':
                result = a - b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                result = a / b;
                break;
            case 'remainder':
                result = a % b;
                break;
            default:
                throw Error('unknown command');
        }

        return result;
    }


    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('substract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1
}