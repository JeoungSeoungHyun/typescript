{
    /**
     * Union Types: OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down' ;
    function move1(direction: Direction){
        console.log(direction);
    }
    move1('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

}