{
    /**
     * Enum : 관련된 여러 상수값들을 한 곳에 모아서 정의
     * 자바스크립트에는 존재하지 않는 타입이라 타입스크립트 자체로 정의
     */

    // JavaScript에서 고정 상수는 대문자로 표현
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;   
    const WENDSDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WENDSDAY": 2});
    let dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScriipt
    // 값을 지정하지 않으면 0부터 +1씩 추가된다
    // 문자열도 지정이 되지만 자동 입력이 되지 않기 때문에 수동으로 추가해줘야 한다.
    // TS에서는 enum을 사용하지 않는 편이 좋다. 그 이유는 enum 값을 받은 재할당이 가능한 변수는 다른 숫자의 값을 넣을 수 있게 된다.
    // 따라서 타입이 정확하게 보장되지 않는다.
    enum DAYS {
        Monday = 1,
        Tuesday = 'Tuesday',
        Wendsday = 'Wendsday',
        Thursday = '목',
        Friday = '금',
        Satarday = '토',
        Sunday = '일',
    }
    console.log(DAYS.Monday);
    console.log(DAYS.Tuesday);
    console.log(DAYS.Wendsday);
    console.log(DAYS.Thursday);
    console.log(DAYS.Friday);
    console.log(DAYS.Satarday);
    console.log(DAYS.Sunday);
    const day = DAYS.Satarday;
    let today:DAYS = DAYS.Monday;
    today = 10;
    console.log(today);
    let tomorrow:DAYS = DAYS.Tuesday;
    tomorrow = 3;
    console.log(tomorrow);

    // Union Type을 사용하자.(단, 모바일 개발을 할 때는 union을 사용할 수 없기 때문에 enum의 사용이 필요하다)
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wendsday';

    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek = "Tuesday";
    dayOfWeek = DAYS.Wendsday;
    // dayOfWeek = 3; 불가능
}