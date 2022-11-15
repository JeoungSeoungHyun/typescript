{
    type PoistionType = {
        x: number;
        y: number;
    }

    interface PositionInterface {
        x: number;
        y: number;
    }
    
    // object ★
    const obj1: PoistionType = {
        x: 1,
        y: 1,
    }
    
    const obj2: PositionInterface = {
        x: 1,
        y: 1,
        z: 1,
    }
    
    // class ★
    class Pos1 implements PoistionType {
        x: number;
        y: number;
    }
    
    class Pos2 implements PositionInterface {
        x: number;
        y: number;
        z: number;
    }
    
    // Extends
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    type ZPositionType = PoistionType & {z: number};

    // 같은 interface를 재정의 하면 합쳐진다.
    // only interfaces can be merged
    interface PositionInterface {
        z: number;
    }

    // Type aliases can use computed properties
    type Person = {
        name: string,
        age: number,
    }
    type Name = Person['name']; // string

    type NumberType = number;
    type Driection = 'left' | 'right';
}