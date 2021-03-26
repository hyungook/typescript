console.log('Hello World!!');

class Car {
    engine: number;
    constructor() {
        this.engine = 1;
    }
};


// tsc main.ts 명령어를 사용해 ts -> js  컴퍼일러 작업을 해야한다.
// npm install -g ts-node
// ts-node main.ts
// tsc -h : 가능한 모든 옵션을 확인할 수 있다.
// tsc main.ts -w : 실시간으로 수정을 반영해준다.