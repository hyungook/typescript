{
  /**
   * Type Assertions π©
   * 100% μ₯λ΄ν  λμλ§ μ¬μ©
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // numbers!.push(2); // 10000% νμ€μΌ λ '!'λ₯Ό λΆμΈλ€.
  numbers.push(2); // π±

  const button = document.querySelector('class')!;
  // if(button) {
  //   button.nodeValue;
  // }
}
