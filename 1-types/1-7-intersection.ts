{
  /**
   * Intersection Types: &
   * -> 모든 것을 다 합한 성격
   * 다양한 타입을 묶어서 사용 가능하다.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }


  // student에 관한 것만 작성하면 error 발생
  // internWork({
  //   name: 'ellie',
  //   score: 1,
  // });

  internWork({
    name: 'ellie',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
