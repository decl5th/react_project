import React from 'react';

const Main = () => {
    throw new Error ('에러 발생');
    return <h1>메인페이지</h1>;
};

export default React.memo(Main);