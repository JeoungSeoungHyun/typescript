{
    /**
     * Let's make a game 🕹
     */

    type Direction = 'up' | 'down' | 'left' | 'right' | 'he';

    const position = {x:0,y:0};

    function move(direction:Direction):void{

        switch(direction){
            case('up'):
                position.y += 1;
                break;
            case('down'):
                position.y -= 1;
                break;
            case('left'):
                position.x -= 1;
                break;
            case('right'):
                position.x += 1;
                break;
            default:
                //const invalid: never = direction; // 이와 같은 코드를 추가하여 컴파일 단계에서 Error를 찾을 수 있다.
                throw Error('unknwon command!');
        }
    }

    console.log(position); // { x: 0, y: 0}
    move('up');
    console.log(position); // { x: 0, y: 1}
    move('down');
    console.log(position); // { x: 0, y: 0}
    move('left');
    console.log(position); // { x: -1, y: 0}
    move('right');
    console.log(position); // { x: 0, y: 0}

}