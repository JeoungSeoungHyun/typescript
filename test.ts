{
    class Animal{
        name:string = '동물';

        sound(num?:number):void{
            console.log('하이');
        };
    }

    interface Cute{
        cute:number;
    }

    class Cat extends Animal{
        name:string = '고양이';
        age:number = 3;

        sound(): void {
            console.log('야옹')
        }
    }

    const cat:Cat = new Cat();
    console.log(cat);
    console.log(cat.name);
    console.log(cat.age);
    cat.sound();
    
    const cat2:Animal = new Cat();
    console.log(cat2);
    console.log(cat2.name);
    console.log(cat.age);
    cat2.sound();

}