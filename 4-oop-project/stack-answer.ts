{
    interface Stack {
        readonly size:number; // 값의 변경이 불가능하도록 
        push(value:string): void;
        pop():string;
    }

    type StackNode = { // 값이 변경되지 않도록 만들어주기
        readonly value: string;
        readonly next?: StackNode;
    }
    
    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity:number) {}

        get size() {
            return this._size;
        }

        push(value: string): void {
            if(this._size == this.capacity){
                throw new Error('Stack is full!');
            }

            const node: StackNode = {value, next:this.head};
            this.head = node;
            this._size ++;
        }

        pop(): string { 
            if(this.head != null){// null과 undefiend는 다른 타입이지만 null == undefined 는 동일하다고 간주된다.
                const node = this.head;
                this.head = node.next;
                this._size --;
                return node.value;
            }
            throw new Error('Stack is empty!');
        }
    }

    const stack = new StackImpl(2);
    stack.push('test1');
    stack.push('test2');
    stack.push('test3');

    while(stack.size != 0){
        console.log(stack.pop());
    }

    stack.pop();


}