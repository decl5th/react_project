import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';
import styled from 'styled-components';

// MainBox 선언 및 스타일링을 통해 푸터와의 간격 및 범위 확보
const MainBox = styled.main` 
  min-height: 650px; 
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
