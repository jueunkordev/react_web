import React from 'react'; // react 라이브러리 선언
import { Link } from 'react-router-dom'; // router 라이브러리로 웹페이지를 분할
// Link : <a>와 동일한 속성을 가지고 있습니다. 단, to 속성을 이용하여 SPA로 화면전환
// 화살표 함수를 이용하여 export하는 형태
var Top = () => {
  return (
    <>
      <ul>
        <li><Link to="/"> 메뉴 1</Link></li>
        <li><Link to="/Subpage"> 메뉴 1</Link></li>
        <a href='/Login'><li>메뉴 3</li></a>
        <li>메뉴 4</li>
      </ul>
    </>
  );
}

// 경력 없는 프론트
// function Top() {
//   return (
//     <>
//       <ul>
//         <li>메뉴 1</li>
//         <li>메뉴 2</li>
//         <li>메뉴 3</li>
//         <li>메뉴 4</li>
//       </ul>
//     </>
//   );
// }

export default Top;