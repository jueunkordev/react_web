import React from "react";
import { Route, Routers } from 'react-router-dom';
import Top from './Top'; // Top.js에 있는 Top 함수를 가져옴

// 페이지를 분할하는 영역 및 페이지 이동 (메인 페이지)
function Controller() {
  return (
    <>
      <Top />
    </>
  );
}

export default Controller;