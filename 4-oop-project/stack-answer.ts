{
    interface Stack {
        size:number; // 값의 변경이 불가능하도록
        push(value:string): void;
        pop():string;
    }
    
    // 연결리스트를 활용할것

    class LinkedList {
        static head:Node;

        push(value:string):void{
            let node = new Node(value);
            LinkedList.head = node;
        }

        pop():string{
            let node = LinkedList.head;
            return node.value;
        }
    }

    class Node {
        value:string;
        readonly size:number;
        prev_Node;

        constructor(value:string){
            value;

            if(LinkedList.head == null){
                this.prev_Node = 'null';
            } else {
                this.prev_Node = LinkedList.head;
            }
        };
    }

    class Mstack implements Stack {
        ll: LinkedList;
        readonly size: number;
        constructor(){
            let ll = new LinkedList();
            this.ll = ll;
        }
        push(value: string): void {
            this.ll.push(value);
        }
        pop(): string {
            return this.ll.pop();
        }
    }

}