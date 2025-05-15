import { useState } from "react"; //키 관련 배열열

//일반함수, 선언적 함수, 익명함수, 대입함수, 즉시실행함수, 화살표함수, 명명함수
//리턴함수(반환함수), 중첩함수, 골백함수, 로드함수, 전역함수
/*
익명 함수 : 
function(){

}

react에서 조건문을 사용 시 return 함수를 기본으로 사용을 하며
결과값만 return()출력 함수로 전달함
*/
export const Oop = function () {
  //명명함수
  var [result1, resultdata1] = useState('hong'); //useState() : react에서 제공하는 상태관리 함수
  //resultdata1("hong");
  //return: 출력위주, 변수선언(X)

  var if_data = function () {
    var htmlcode = []; // 빈 배열 값을 선언
    // 해당 배열값에 html코드를 조건만 결과를 입력 후 최종 배열변수를 return
    if (result1 === "hong") { // result1이 hong일 경우
      htmlcode.push(<input type='button' value='로그아웃' />);
    }
    else {
      htmlcode.push(<input type='button' value='로그인' />);
    }

    return htmlcode;
  }

  // 반복문에 사용하는 useState
  var [result2, resultdata2] = useState(5);
  var for_data = function () {
    var htmlcode2 = []; // 빈 배열 값을 선언
    // 해당 배열값에 html코드를 조건만 결과를 입력 후 최종 배열변수를 return
    for (var i = 0; i < result2; i++) {
      htmlcode2.push(<li key={i}>리스트 {i + 1}</li>);
      htmlcode2.push(<li><input type="checkbox" value={i + 1} /> 데이터 값 : {i + 1}</li>);
    }
    return htmlcode2;
  }

  // switch문
  var [result3, resultdata3] = useState("card");
  var for_switch = function () {
    var htmlcode3 = []; // 빈 배열 값을 선언
    // 해당 배열값에 html코드를 조건만 결과를 입력 후 최종 배열변수를 return
    switch (result3) {
      case "card":
        htmlcode3.push(
          <div>
            카드 번호 : <input type='text' /><br />
            카드 비밀번호 : <input type='password' /><br />
          </div>
        );
        break;
      case "bank":
        htmlcode3.push(
          <div>
            입금계좌번호 : <input type='text' /><br />
            입금자명 : <input type='text' /><br />
          </div>
        );
        break;
      default:
        htmlcode3.push(<input type='button' value='기타결제수단' />);
        break;
    }
    return htmlcode3;
  }


  return (
    <>
      {if_data()}<br />
      {for_data()}<br />
      {for_switch()}<br />
      <ol>

      </ol>
    </>
  );


}