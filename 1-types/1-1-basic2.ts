// block scope 로 작성하지 않으면 파일이 충돌할 수도 있다

{
    // Javascript
    // var : old 💩
    // 호이스팅 외 다른 문제가 있어 추천하지 않음. 
    var num = 5;
    num = 1;

    // let es6에 도입
    // 할당된 값을 변경할 수 있다.
    let name = 'hello';
    name = 'hi';

    //const // 할당된 값 변경 x
    const age = 5;
    // age = 5; // error
}