{
    /**
     *  Intersection Types: & 개념
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker){
        console.log(person.name, person.score, person.work());
    }

    internWork({
        name: 'seounghyun',
        score: 100,
        employeeId: 1,
        work: () => {},
    });
}