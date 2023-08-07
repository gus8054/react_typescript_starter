# react_typescript_starter
리액트+타입스크립트의 스타터 코드이다. 가짜 데이터를 호출하는 코드가 설정되어 있다.

# 사용한 패키지 

* chance
* luxon

```
npm i chance luxon
npm i -D @types/chance @types/luxon
```

chance 패키지는 다양한 종류의 그럴듯한 가짜 데이터를 제공해준다.
luxon 패키지는 '2021/10/6'과 같은 날짜를 '20분 전' 형태로 만들어 주는 유용한 기능을 제공해준다.

# Folder Structure

* data
  * index.ts
  * util.ts
  * image.ts
  * chance.ts
  * date.ts

# Usage
```tsx
import * as D from "./data";

function App() {
  return (
    <div className="App">
      <p>{D.randomName()}</p>
      <p>{D.randomJobTitle()}</p>
      <p>{D.randomDayMonthYear()}</p>
      <p>{D.randomRelativeDate()}</p>
      <img src={D.randomAvatar()} height={50} />
      <img src={D.randomImage()} height={300} />
    </div>
  );
```

}
