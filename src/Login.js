// on으로 시작하는 속성 (이벤트 핸들링 속성은 모두 첫글자가 대문자 입니다.)
// onClick, onChange, onSubmit 등
import { useState } from "react"; // useState를 import
// useState 라이브러리 : React Hook => 가상의 함수에 데이터를 입력시킨 후 가상의 키값으로 출력

export const Login = () => { // Main.js에 있는 Main 함수를 가져옴
  var [mids, midv] = useState(""); // [키 값(가상의 id명), 이벤트 함수 명]
  var [mpws, mpwv] = useState("");
  var [msg, message] = useState("관리자 외에는 접근이 안 됩니다."); // {msg} 값을 출력

  // 외부 함수를 적용하여 Hook으로 전달하는 방식
  var midtest = function (e) {
    mids(e.target.value); // e.target.value : input 태그에 입력된 값을 가져옴
  };
  var uri = "./loginok.do"; // 로그인 페이지 URI
  return (
    <>
      <section>
        <form action="{uri}" id="frm" method="post" onSubmit={loginck}>
          아이디 : <input type="text" id="mid" name="mid" onChange={(e) => midv(e.target.value)} />
          패스워드 : <input type="password" id="mpw" name="mpw" onChange={(e) => mpwv(e.target.value)} />
          <input type="submit" value="로그인" />
          <br /><br />
          {msg}
          <br /><br />
          <a href="/">메인화면으로 이동</a>
        </form>
      </section>
    </>
  );

  // 외부 함수를 이용하여 적용하는 방식 (name 값으로 핸들링 안 됨)
  function loginck(e) {
    e.preventDefault(); // submit 이벤트를 막음

    // React
    if (mids == "") {
      message("아이디를 입력하세요");
      return false;
    }
    else if (mpws == "") {
      message("비밀번호를 입력하세요");
      return false;
    }
    else {
      document.querySelector("#frm").submit(); // submit 이벤트를 발생시킴
      alert("로그인 성공");
    }


    /* // ECMA + React
    var id = document.getElementById("mid").value;
    var pw = document.getElementById("mpw").value;
    if (id === "") {
      alert("아이디를 입력하세요");
      return false;
    }
    else if (pw === "") {
      alert("비밀번호를 입력하세요");
      return false;
    }
    else {
      document.getElementById("frm").submit(); // submit 이벤트를 발생시킴
      alert("로그인 성공");
    }*/
  }
}