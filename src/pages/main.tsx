import React from 'react';
import Header from "../components/main/Header";
import styled from "styled-components";

const MainStyle = styled.div`
  background-color: ${props => props.theme.color.white2};
`;

const Main = () => {
    return (
        <MainStyle>
            <Header />
        </MainStyle>
    );
};

export default Main;