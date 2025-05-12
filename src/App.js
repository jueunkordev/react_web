import logo from './logo.svg'; // src라는 디렉토리에 이미지가 있을 경우
import logo2 from './logo2.jpg';
import './App.css?v=1';
// className : HTML에서 class 속성과 동일한 속성을 말합니다.
export default function App() { // 함수에 export를 이용하여 출력도 가능
  // export 사용 시 무조건 return 함수를 적용하여 사용해야 함
  /* return 함수 안에는 메인 태그 생성 후 publishing을 하게 됨 */
  // React는 return 함수에는 무조건 markup을 이용합니다. (XHTML 기준으로 사용됨)
  return (
    <>
      <input type="text" />
      <div className="box"></div>
      <img src={logo2} className="App-logo" alt="logo" />
    </>
  );
}

// export default App;
