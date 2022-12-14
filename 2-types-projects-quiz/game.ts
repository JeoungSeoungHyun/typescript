{
    /**
     * Let's make a game ๐น
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
                //const invalid: never = direction; // ์ด์ ๊ฐ์ ์ฝ๋๋ฅผ ์ถ๊ฐํ์ฌ ์ปดํ์ผ ๋จ๊ณ์์ Error๋ฅผ ์ฐพ์ ์ ์๋ค.
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