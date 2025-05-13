import logo from './logo.svg'; // src라는 디렉토리에 이미지가 있을 경우
import logo1 from './logo.jpg';
import './App.css?v=1';
// className : HTML에서 class 속성과 동일한 속성을 말합니다.
export default function App() { // 함수에 export를 이용하여 출력도 가능
  // export 사용 시 무조건 return 함수를 적용하여 사용해야 함
  /* return 함수 안에는 메인 태그 생성 후 publishing을 하게 됨 */
  // React는 return 함수에는 무조건 markup을 이용합니다. (XHTML 기준으로 사용됨)
  // img src 사용 시 {} 시작하면 src 경로이며, ./로 시작하는 경로일 경우 public 디렉토리에서 가져옴
  // require : src 경로에 있는 import 하지 않은 이미지를 가져올 떄 사용하빈다 그 외에 일반적인 <img src="./" /> 이미지는 모두 public 단, 암호화 불가능
  return (
    <>
      <input type="text" />
      <div className="box"></div>
      <img src="./logo1.jpg" /><br />
      <img src={require('./logo2.jpg')} /><br />
      <img src={logo1} className="App-logo" alt="logo" />
    </>
  );
}

// export default App;
