import React from 'react';
import styled from "styled-components";

const CardsStyle = styled.div`
  height: 470px;
  background-color: ${props => props.theme.color.green1};
  margin-top: 60px;
  
  .tablet & {
    height: 454px;
  }
`;

const Cards = () => {
    return (
        <CardsStyle>
            
        </CardsStyle>
    );
};

export default Cards;