{
    // Java : Exception
    // JavaScript : Error
    // const array = new Array(10000000000000000000);

    // Error(Exception) Handling : try -> catch -> finally

    function readFile(fileName: string): string {
        if(fileName === 'not exist!') {
            throw new Error(`file not exist! ${fileName}`);
        }
        return 'file contents';
    }

    function closeFile(fileName: string) {
        //
    }
    
    try {
        const fileName = 'file';
        console.log(readFile(fileName));
        closeFile(fileName);
    } catch (error) {
        console.log(`catched!!`);
    } finally {
        console.log(`finally!!`);
    }

    function run(){
        
        const fileName2 = 'not exist!';
        try {
            console.log(readFile(fileName2));
        } catch (error) {
            console.log(`catched!!`);
            return;
        } finally {
            closeFile(fileName2); // catch문을 타든 안타든 실행되어야만 하는 로직이 있다면 finally를 통해 처리를 해줘야 한다.
                                  // catch문에서 return이 되더라도 finally에 있는 로직은 실행이 된다.
            console.log(`finally!!`);
        }
    
        console.log('final'); // try-catch를 하는 경우 프로세스가 죽지 않고 끝까지 실행이 된다.
    }
    run();
}