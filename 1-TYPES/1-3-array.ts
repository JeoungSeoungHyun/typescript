{
    // Array - 2가지 방식
    const fruits: string[] = ['🍉','🍈'];
    const score: Array<number> = [1,3,4];
    // readonly 데이터를 읽을 수만 있고 변경이 불가하다. Array<>의 경우 readonly의 사용이 불가. 일관성을 위해 []로 작성을 추천
    function printArray(fruits: readonly string[]){}   
    
    // Tuple - 다른 타입의 데이터를 배열에 사용하는 경우 => 사용을 권장하지 않음. 인덱스로 출력하기 때문에 확인이 불편 추천하지 않음
    // 그렇기 때문에 interface, type alis, class로 대체해서 사용한다? 
    let student: [string, number];
    student = ['name',123];
    student[0] // name
    student[1] // 123
    // 아래와 같이 사용하면 조금 나아지지만 지정해줘야 하는 단점이 여전히 존재.
    const [name, age] = student;

}