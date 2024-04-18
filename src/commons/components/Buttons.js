import React from "react";
import styled, { css } from "styled-components";
import { buttonColor } from "../../styles/color";
import fontSize from "../../styles/fontSize";

const {big, medium} = fontSize;

const commonStyle = css`
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
`;

export const MidButton = styled.button`
  font-size: ${medium};
  height: 40px;
  ${commonStyle}

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;

// 0 -> buttonColor의 첫번째 항목인 primary 컬러를 가져온다는 뜻
export const BigButton = styled.button`
    font-size: ${big};
    height: 45px;
    ${commonStyle}

  ${({color}) => 
    buttonColor[color] && 
    css`
        background: ${buttonColor[color][0]};
        color: ${buttonColor[color][1]};
        border: 1px solid ${buttonColor[color][2]}
        `}
`;

// 가입 버튼 배치 스타일링 설정 -> 다른 컴포넌트에서도 적용 가능한 버튼 배치 스타일링
export const ButtonGroup = styled.div`
    display: flex;
    width: ${({width}) => width ? `${width}px` : '100%'};
    margin: 20px auto;

    button {
        width: 0;
        flex-grow: 1;

    }

    button + button {
        margin-left: 7.5px;
    }

`;