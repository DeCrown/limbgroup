import React, {useState} from 'react';
import styled from "styled-components";
import {Icons} from "../../utils/Images";
import {DEVICE} from "../../utils/Device";
import Buttons from "./menu/Buttons";
import Contacts from "./menu/Contacts";
import LogoContainer from "./menu/Logo";
import Expanded from "./menu/Expanded";

const MenuStyle = styled.div`
  height: 90px;
  display: grid;
  grid-auto-flow: column;
  //justify-content: space-between;
  grid-template-columns: minmax(190px, 290px) auto minmax(160px, 260px);
  
  .tablet &, .mobile & {
    grid-template-columns: minmax(190px, 290px) auto;
  }
  
  .mobile & {
    height: 80px;
  }
`;

const MenuButtonStyle = styled.button`
  width: min-content;
  padding: 0 40px;
  display: grid;
  align-content: center;
  justify-self: end;
  margin-right: 40px;
  cursor: pointer;
  border: none;
  background-color: unset;
  
  .tablet & {
    margin-right: 70px;
  }
  
  .mobile & {
    margin-right: 0;
    padding: 0 34px;
  }
`;

const Menu = () => {
    const [active, setActive] = useState(false);

    return (
        <MenuStyle>
            <LogoContainer />
            {
                DEVICE == 'desktop' ? <Buttons /> : null
            }
            {
                DEVICE == 'desktop' ? <Contacts /> :
                    <MenuButtonStyle onClick={() => setActive(true)}>
                        <img src={DEVICE == 'mobile' ? Icons.menu.mobile : Icons.menu.tablet} />
                    </MenuButtonStyle>
            }
            <Expanded active={active} setActive={setActive} />
        </MenuStyle>
    );
};

export default Menu;