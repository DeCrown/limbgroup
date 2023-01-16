import React from 'react';
import Menu from "../header/Menu";
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: ${props => props.theme.color.black1};
  height: 800px;
`;

const Header = () => {
    return (
        <HeaderStyle>
            <Menu />
        </HeaderStyle>
    );
};

export default Header;