{ 
  /**
   * Type Aliases
   * -> 새로운 타입을 정의할 수 있다.
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;

  // 원시 타입뿐만 아니라 배열 타입도 가능
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

 
  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; // name만 할당할 수 있다.
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  
}
