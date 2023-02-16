import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../utils/Images";

const LogoContainerStyle = styled.div`
  padding: 15px 0 15px 100px;
  display: grid;
  & img {
    height: 50px;
    cursor: pointer;
  }
  
  .tablet & {
    padding-left: 80px;
  }
  .mobile & {
    padding-left: 30px;
  }
`;

const LogoContainer = () => {
    return (
        <LogoContainerStyle>
            <img src={Logo.logo} onClick={() => document.location.href = '/'} />
        </LogoContainerStyle>
    );
};

export default LogoContainer;
