import React from 'react';
import Menu from "../header/Menu";
import styled from "styled-components";
import {Backgrounds} from "../../utils/Images";
import Banner from "../header/Banner";
import ButtonDown from "../header/banner/ButtonDown";

const HeaderStyle = styled.div`
  background-color: ${props => props.theme.color.black1};
  height: 800px;
  background-image: url("${Backgrounds.main}");
  background-repeat: no-repeat;
  background-size: 960px 800px;
  background-position: 100% 0px;
  position: relative;
  
  .tablet & {
    background-position: calc(100% + 112px) 0px;
  }
  
  .mobile & {
    height: auto;
    min-height: 100vh;
  }
`;

const Header = () => {
    return (
        <HeaderStyle id={'header'}>
            <Menu />
            <Banner />
            <ButtonDown />
        </HeaderStyle>
    );
};

export default Header;