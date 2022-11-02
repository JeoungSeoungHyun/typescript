{
    class stack {

        count:number = 0;
        str:string = '';

        push(str:string):void{
            //console.log(`push 전 count : ${this.count}`);
            if(this.count == 0){
                this.str += str;
            } else {
                this.str += `,${str}`;
            }
            this.count += 1;
            console.log('push');
        }

        pop():string{
            //console.log(`pop 전 count : ${this.count}`);
            if(this.count > 0){
                let index = this.str.lastIndexOf(',');
                if(index == -1){
                    console.log('just 1 pop');
                    this.count -= 1;
                    this.str = '';
                    return this.str;
                } else {
                    let pop:string = this.str.substring(index);
                    this.count -= 1;
                    this.str = this.str.substring(0,index);
                    console.log('pop');
                    return pop;
                }
            } else {
                throw new Error('Dont exist enough string')
            }
        }
    }

    let st = new stack();

    st.push('test1');
    console.log(st.count);
    console.log(st.str);
    console.log('===============')
    st.push('test2');
    console.log(st.count);
    console.log(st.str);
    console.log('===============')
    st.pop();
    console.log(st.count);
    console.log(st.str);
    console.log('===============')
    st.pop();
    console.log(st.count);
    console.log(st.str);
    console.log('===============')
    st.push('test3')
    console.log(st.count);
    console.log(st.str);
    console.log('===============')
    
}