{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }


  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  

  // JavaScript ✨ => TypeScript
  // 최신 js 코드를 ts에서 사용가능 / 최신 문법 외에도 JS에는 포함되지 않은 TS Syntax 문법 사용 가능

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
  // firstName: string, lastName?: string -> ?를 붙이면 전달해도 되고 전달하지 않아도 된다.
  // function printName(firstName: string, lastName: string | undefined) {
  // printName('Ellie', undefined); -> undefined를 명시해야 한다.
  
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna');


  // Default parameter
  // 값이 없을 때 자동적으로 기본값으로 설정된다.
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();


  // Rest parameter
  // ' ...number '을 활용하여 모든 숫자 데이터를 받아와서 추가한다
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));  // 3
  console.log(addNumbers(1, 2, 3, 4));  // 10
  console.log(addNumbers(1, 2, 3, 4, 5, 0));  // 15
}
