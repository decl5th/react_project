import React from 'react';

const Footer = () => {
  return <footer>푸터</footer>; // 무한로딩 이유 : Footer을 리턴에서 footer의 태그명을 선언자로 했기 때문에 무한 반복이 이루어짐 Footer와 footer 구분 유의
};

export default React.memo(Footer);
