import React from "react";
import { Route, Routers, Routes } from 'react-router-dom';
// import {} 형태는 단 export 변수 형태로 export된 것만 가져올 수 있음
// import 가상의 태그명 from './Top'; => export default 만 사용할 수 있음
// {} 없으면 export default 필수
import Top from './Top'; // Top.js에 있는 Top 함수를 가져옴
import { Copy } from './Copy';
import { Main } from './Main';
import { Subpage } from './Subpage';
import { Login } from './Login.js';
import { Oop } from './Oop';
// 페이지를 분할하는 영역 및 페이지 이동 (메인 페이지)
// Routes : 페이지를 분할하는 영역
// Route : URI의 경로에 따라 해당 (path) .js를 로드하는 태그
function Controller() {
  return (
    <>
      <Top />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subpage" element={<Subpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oop" element={<Oop />} />
      </Routes>
      <Copy />
    </>
  );
}

export default Controller;