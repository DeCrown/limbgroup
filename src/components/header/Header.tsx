import React from 'react';
import Menu from "./Menu";
import styled from "styled-components";
import {Backgrounds} from "../../utils/Images";
import Banner from "./Banner";
import ButtonDown from "./banner/ButtonDown";

const HeaderStyle = styled.div`
  background-color: ${props => props.theme.color.black1};
  height: 800px;
  background-image: url("${Backgrounds.main.desktop}");
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
    background-image: url("${Backgrounds.main.mobile}");
    background-position: 40% 100%;
    background-size: 812px;
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
