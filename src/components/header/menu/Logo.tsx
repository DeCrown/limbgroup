import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../utils/Images";

const LogoContainerStyle = styled.div`
  padding: 15px 0 15px 30px;
  display: grid;
  & img {
    height: 50px;
  }
`;

const LogoContainer = () => {
    return (
        <LogoContainerStyle>
            <img src={Logo.logo} />
        </LogoContainerStyle>
    );
};

export default LogoContainer;