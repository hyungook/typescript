{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined (한 가지의 심플한 데이터를 담을 수 있는 원시 타입)
   * Object: function, array .... (복잡한 데이터를 담을 수 있는 오브젝트 데이터)
   */


  // number : 정수, 소수, - 값 등의 숫자만
  // const num: number = 'd';  // error
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean : true / false
  const boal: boolean = false;

  // undefined : 값이 있는지 없는지 아무것도 정해지지 않은 상태
  let name: undefined; // 💩 undefined만 할당할 수 있기 때문에 이런 식으로 작성은 하지 않는다.
  let age: number | undefined; // 이런 식으로 선언
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // return 1;
    return undefined;
  }

  // null : 텅텅 비어있는 상태 결정
  let person: null; // 💩
  let person2: string | null;



  // unknown 💩
  // 알 수 없는 / 가능하면 사용하지 않는 것을 추천
  let notSure: unknown = 0; // 어떤 데이터가 할당될지 모르는 상태
  notSure = 'he';
  notSure = true;

  // any 💩
  // 어떤 것이든 담을 수 있는 변수
  let anything: any = 0;
  anything = 'hello';

  // void : 아무런 것도 return 하지 않는 타입. 평소에는 자동으로 생략된다.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never : 어플리케이션에서 error을 던질 때 사용
  // never type은 return을 할 수 없다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {} // 도달할 수 없는 코드
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}