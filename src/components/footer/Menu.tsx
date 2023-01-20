import React from 'react';
import FooterHeader from "../shared/FooterHeader";
import styled from "styled-components";
import FooterText from "../shared/FooterText";
import {FooterMenuList} from "../../utils/constants/Menu";
import ScrollTo from "../../utils/ScrollTo";

const MenuListStyle = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 8px;
`;

const MenuFooterText = styled(FooterText)`
  text-transform: uppercase;
  cursor: pointer;
`;

const Menu = () => {
    return (
        <div>
            <FooterHeader>Меню</FooterHeader>
            <MenuListStyle>
                {FooterMenuList.map((el, i) =>
                    <MenuFooterText key={i} onClick={() => ScrollTo(el.chapter)}>{el.label}</MenuFooterText>)}
            </MenuListStyle>
        </div>
    );
};

export default Menu;