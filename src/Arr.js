import { useState } from "react"; //키 관련 배열열
// 배열 데이터값을 WEB에 출력하는 역할
export const Arr = function () {

  var data = [
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "이순신", age: 30 },
    { id: 3, name: "강감찬", age: 40 },
    { id: 4, name: "유관순", age: 50 },
    { id: 5, name: "안중근", age: 60 }
  ];

  let foreach = function () {
    var htmlcode = []; // 빈 배열 값을 선언
    // 해당 배열값에 html코드를 조건만 결과를 입력 후 최종 배열변수를 return
    data.forEach((item, index) => {
      htmlcode.push(
        <li key={index}>
          {item.id} : {item.name} : {item.age}
        </li>
      );
    });
    return htmlcode;
  };

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}