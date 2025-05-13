import React from 'react'; // react 라이브러리 선언
import ReactDOM from 'react-dom/client'; // HTML, XML 출력
import './index.css'; // css (Style 적용)
import App from './App'; // Module을 로드하는 방식
import Top from './Top';
// import reportWebVitals from './reportWebVitals'; // 버그 및 데이터 상황에 대한 report를 확인하기 위함

const root = ReactDOM.createRoot(document.getElementById('webmain'));
root.render(
  /* root.render : Controller에서 해당 라이브러리에 대한 태그 기준으로 Model과 같은 역할을 합니다. */
  <React.StrictMode>
    {/* <App /> : import 이름을 태그명으로 지정 */}
    <Top />
    <App />
  </React.StrictMode>
);
// reportWebVitals();
