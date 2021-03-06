{
  // JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript โจ
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }


  // JavaScript ๐ฉ
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript โจ
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  

  // JavaScript โจ => TypeScript
  // ์ต์  js ์ฝ๋๋ฅผ ts์์ ์ฌ์ฉ๊ฐ๋ฅ / ์ต์  ๋ฌธ๋ฒ ์ธ์๋ JS์๋ ํฌํจ๋์ง ์์ TS Syntax ๋ฌธ๋ฒ ์ฌ์ฉ ๊ฐ๋ฅ

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
  // firstName: string, lastName?: string -> ?๋ฅผ ๋ถ์ด๋ฉด ์ ๋ฌํด๋ ๋๊ณ  ์ ๋ฌํ์ง ์์๋ ๋๋ค.
  // function printName(firstName: string, lastName: string | undefined) {
  // printName('Ellie', undefined); -> undefined๋ฅผ ๋ช์ํด์ผ ํ๋ค.
  
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna');


  // Default parameter
  // ๊ฐ์ด ์์ ๋ ์๋์ ์ผ๋ก ๊ธฐ๋ณธ๊ฐ์ผ๋ก ์ค์ ๋๋ค.
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();


  // Rest parameter
  // ' ...number '์ ํ์ฉํ์ฌ ๋ชจ๋  ์ซ์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์์ ์ถ๊ฐํ๋ค
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));  // 3
  console.log(addNumbers(1, 2, 3, 4));  // 10
  console.log(addNumbers(1, 2, 3, 4, 5, 0));  // 15
}
