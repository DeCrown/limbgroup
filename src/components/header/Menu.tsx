import React, {useState} from 'react';
import styled from "styled-components";
import {Icons, Logo} from "../../utils/Images";
import {DEVICE} from "../../utils/Device";
import Buttons from "./menu/Buttons";

const LogoStyle = styled.div`
  padding: 25px 0 15px 0;
  & img {
    height: 50px;
  }
`;
const InfoStyle = styled.div``;

const MenuStyle = styled.div`
  height: 90px;
  display: grid;
  grid-auto-flow: column;
`;

const MenuButton = () => {
    return (
        <div>
            <img src={DEVICE == 'mobile' ? Icons.menu.mobile : Icons.menu.tablet} />
        </div>
    );
}

const Menu = () => {
    const [opened, setOpened] = useState(false);

    return (
        <MenuStyle>
            <LogoStyle><img src={Logo.logo} /></LogoStyle>
            {
                DEVICE == 'desktop' ? <Buttons /> : null
            }
            {
                DEVICE == 'desktop' ? <InfoStyle></InfoStyle> : <MenuButton></MenuButton>
            }
        </MenuStyle>
    );
};

export default Menu;