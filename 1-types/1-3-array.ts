{
  // Array
  const fruits: string[] = ['π', 'π'];
  // const scroes: number[] = [1, 3, 4];
  const scroes: Array<number> = [1, 3, 4];

  // function printArray(fruits: string[]) {}
  // -> μ£Όμ΄μ§ λ°μ΄ν°λ₯Ό λ³κ²½νκ±°λ μλ°μ΄νΈλ₯Ό ν  μ μμ μκ° μλ€
  function printArray(fruits: readonly string[]) {}
  // -> μ λ λ³κ²½ν  μ μκ³ , μ½μμλ§ μλ€.



  // Tuple -> interface, type alias, class
  // λΉμΆμ² : κ°λμ±μ΄ λ¨μ΄μ§λ€.
  // λ°°μ΄μ΄κΈ΄ λ°°μ΄μ΄μ§λ§ μλ‘ λ€λ₯Έ νμμ ν¨κ» κ°μ§ μ μλ λ°°μ΄μ΄λ€.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
