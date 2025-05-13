import React from 'react';

/* css 파일 없이 style 속성을 적용시키는 Javascript Style 적용하는 형태 구조로 사용함
*/

export let Copy = () => {
  const copycss = {
    width: '100%',
    height: '25px',
    color: 'blue',
    backgroundColor: 'yellow'
  };

  return (
    <footer>
      <div style={{ width: '100%', color: 'red' }}>대표전화 : 1588-6000</div>
      <div style={copycss}>Copyright 2025 by Apink</div>
    </footer>
  );
};
