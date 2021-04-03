{
  /**
   * Enum
   * 여러 가지 관련된 상수값들을 한곳에 모아서 정의하는 타입
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  // freeze : object를 얼려 한번만 정의할 수 있게 만드는 api
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum은 union으로 대부분 대체 가능하다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  // 맨 앞글자는 대문자로 작성하고 나머지는 소문자로 작성한다.
  enum Days {
    // Monday = 'monday', 문자열도 할당 가능하다.
    Monday, // 0
    // Tuesday = 'thesday', 문자열도 할당 가능하지만 다음에 어떤 값이 들어올 지 모르기 때문에 수정적으로 할당한다.
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }

  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
