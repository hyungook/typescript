{
  /**
   *  Union Types: OR ⭐️
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // 'left' | 'right' | 'up' | 'down' 가능한 인자 1가지만 선택할 수 있다.

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;


  // 실전 예제
  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // function login(id: string, password: string): Promise<LoginState> {
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  // function printLoginState(state: LoginState):void {    // void = 생략 가능
  function printLoginState(state: LoginState):void {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }







}
