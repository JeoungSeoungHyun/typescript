{
    type Video = {
        title: string;
        author: string;
    };

    // [1, 2].map(item => item * item); // [1, 4]

    type Optional<T> = {
        [P in keyof T]?: T[P] // for ... in 과 같은 기능을 하게 된다.
    }

    type VideoOptional = Optional<Video>;
    
    type Animal = {
        name: string;
        age: number;
    }
    
    // AnimalOptional이라고 따로 타입을 정의하지 않고아래와 같이 바로 사용하는 것도 가능하다.
    const animal: Optional<Animal> = {
        
    }
    
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'sh',
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // }
    // type VideoReadOnly = {
    //     readonly title?: string;
    //     readonly author?: string;
    //     readonly description?: string;
    // }

    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }

}