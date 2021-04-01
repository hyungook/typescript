{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  // const scroes: number[] = [1, 3, 4];
  const scroes: Array<number> = [1, 3, 4];

  // function printArray(fruits: string[]) {}
  // -> 주어진 데이터를 변경하거나 업데이트를 할 수 없을 수가 있다
  function printArray(fruits: readonly string[]) {}
  // -> 절대 변경할 수 없고, 읽을수만 있다.



  // Tuple -> interface, type alias, class 💩
  // 비추천 : 가독성이 떨어진다.
  // 배열이긴 배열이지만 서로 다른 타입을 함께 가질 수 있는 배열이다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
