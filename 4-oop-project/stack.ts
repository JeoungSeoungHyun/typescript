{
    class stack {

        private count:number = 0;
        private str:string = '';

        getCount():number{
            return this.count;
        }

        getStr():string{
            return this.str;
        }

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
                    let pop:string = this.str;
                    this.str = '';
                    return pop;
                } else {
                    let pop:string = this.str.substring(index+1);
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
    console.log(st.getCount());
    console.log(st.getStr());
    console.log('===============')
    st.push('test2');
    console.log(st.getCount());
    console.log(st.getStr());
    console.log('===============')
    let rs:string = st.pop();
    console.log(`pop 결과 : ${rs}`);
    console.log(st.getCount());
    console.log(st.getStr());
    console.log('===============')
    let rs2:string = st.pop();
    console.log(`pop 결과 : ${rs2}`);
    console.log(st.getCount());
    console.log(st.getStr());
    console.log('===============')
    st.push('test3')
    console.log(st.getCount());
    console.log(st.getStr());
    console.log('===============')
    
}