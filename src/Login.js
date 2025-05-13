export const Login = () => { // Main.js에 있는 Main 함수를 가져옴
  var uri = "./loginok.do"; // 로그인 페이지 URI
  return (
    <>
      <section>
        <form action="{uri}" method="post" onSubmit={loginck}>
          아이디 : <input type="text" id="mid" name="mid" />
          패스워드 : <input type="password" id="mpw" name="mpw" />
          <input type="submit" value="로그인" />
          <br /><br />
          <a href="/">메인화면으로 이동</a>
        </form>
      </section>
    </>
  );

  // 외부 함수를 이용하여 적용하는 방식 (name 값으로 핸들링 안 됨)
  function loginck(e) {
    e.preventDefault(); // submit 이벤트를 막음
    var id = document.getElementById("mid").value;
    var pw = document.getElementById("mpw").value;
    if (id === "") {
      alert("아이디를 입력하세요");
      return false;
    }
    if (pw === "") {
      alert("비밀번호를 입력하세요");
      return false;
    }
  }
}