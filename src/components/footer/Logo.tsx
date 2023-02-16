import React from 'react';
import styled from "styled-components";
import {Logo} from "../../utils/Images";

const LogoStyle = styled.div`
  display: grid;
  grid-gap: 10px;
  align-content: start;
  
  & img {
    cursor: pointer;
  }
`;

const TextStyle = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${props => props.theme.color.white1}8C;
`;

const LogoContainer = () => {
    return (
        <LogoStyle>
            <img src={Logo.logoMin} onClick={() => document.location.href = '/'}></img>
            <TextStyle>Limbgroup © 2010 - 2022</TextStyle>
        </LogoStyle>
    );
};

export default LogoContainer;
