import React from 'react';
import FooterHeader from "../shared/FooterHeader";
import styled from "styled-components";
import FooterText from "../shared/FooterText";

const MenuList = [
    {text: 'О нас', link: 'menu'},
    {text: 'Цены'},
    {text: 'Наши клиенты'},
    {text: 'Завершенные проекты'},
    {text: 'Relax Zone'}
];

const MenuListStyle = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 8px;
`;

const MenuFooterText = styled(FooterText)`
  text-transform: uppercase;
`;

const Menu = () => {
    return (
        <div>
            <FooterHeader>Меню</FooterHeader>
            <MenuListStyle>
                {MenuList.map((el, i) => <MenuFooterText key={i}>{el.text}</MenuFooterText>)}
            </MenuListStyle>
        </div>
    );
};

export default Menu;