import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    border: 1px solid #d5d5d5;
    height: 40px;
    width: 100%;
    border-radius: 3px; 
    padding: 0 10px; // 좌우 여백 
    margin: 10px 0; 
`;

export default React.memo(InputBox);