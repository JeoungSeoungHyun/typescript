{
    let test = new Array;
    test.push('test');
    test.push(1);
    console.log(test);
    // console.log(test.join());
    let res = test.splice(0, 1, 2, 3);
    console.log(test);
    console.log(`res : ${res}`);

    type Student = {
        name:string;
        passed:boolean;
        age:number;
    }

    const students: Student[] = [{name:'A', passed:true, age:13}, {name:'B', passed:true, age:16}, {name:'C', passed:true, age:15}, {name:'D', passed:true, age:11}]
    const result = students.every(student => student.passed);
    const result2 = students.every(student => student.age < 20);
    console.log(result);
    console.log(result2);

    class Animal {}
    class Cat extends Animal {
        isCat: boolean = true;
    }
    class Dog extends Animal {
        isDog: boolean = true;
    }
    const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isCat !== undefined;
    }

    console.log(animals.every<Cat>(isCat));

}