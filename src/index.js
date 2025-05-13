import React from 'react'; // react 라이브러리 선언
import ReactDOM from 'react-dom/client'; // 웹 브라우저에 DOM 형태로 HTML, XML 출력
import { BrowserRouter } from 'react-router-dom'; // router 라이브러리로 웹페이지를 분할
// import page1 from 'page1'; // page1에 있는 page1 js 함수명을 가져옴
// import { page1 , testpage } from 'page1'; // page1, testpage 함수명을 가져옴
// import { page1 , page2, page3, page4 } from './page'; // page라는 디렉토리에 있는 page1, page2, page3, page4 js를 가져옴
import Controller from './Controller'; // Controller.js에 있는 Controller 함수를 가져옴


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* root.render : Controller에서 해당 라이브러리에 대한 태그 기준으로 Model과 같은 역할을 합니다. */
  <BrowserRouter>
    <Controller />
  </BrowserRouter>
);
