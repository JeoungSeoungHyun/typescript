{
    /**
     * Type Aliases - 타입을 정의할 수 있다.
     */
    type Text = string;

    const name1: string = 'seonghyun'
    const name2: Text = 'seonghyun'

    type Num = number;

    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'seonghyun',
        age: 12
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let shName: Name;
    shName = 'name';

    type JSON = 'json';
    const json: JSON = "json";

    type Boal = true;
    const isCat: Boal = true;
}