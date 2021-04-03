{
  /**
   * Type Assertions 💩
   * 100% 장담할 때에만 사용
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // numbers!.push(2); // 10000% 확실일 때 '!'를 붙인다.
  numbers.push(2); // 😱

  const button = document.querySelector('class')!;
  // if(button) {
  //   button.nodeValue;
  // }
}
