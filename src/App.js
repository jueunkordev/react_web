import logo from './logo.svg'; // src라는 디렉토리에 이미지가 있을 경우
import logo2 from './logo2.jpg';
import './App.css?v=1';
// className : HTML에서 class 속성과 동일한 속성을 말합니다.
export default function App() { // 함수에 export를 이용하여 출력도 가능
  return (
    <div className="App">
      <div className="box"></div>
      <img src={logo2} className="App-logo" alt="logo" />
    </div>
  );
}

// export default App;
