import React from 'react';
import styled from "styled-components";

const CardsStyle = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 60px;
  height: 470px;

  .tablet & {
    height: 454px;
    grid-gap: 14px;
  }

  .mobile & {
    height: auto;
  }
`;

const CardsRowStyle = styled.div`
  height: 220px;
  //background-color: ${props => props.theme.color.green1};
  display: flex;
  grid-gap: 30px;

  .tablet & {
    grid-gap: 16px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
  
  .mobile & {
    height: auto;
    flex-direction: column;
  }
`;

const Cards = (props: {rows: any[][]}) => {
    return (
        <CardsStyle>
            {
                props.rows.map((row, i) =>
                    <CardsRowStyle key={i}>
                        {
                            row
                        }
                    </CardsRowStyle>
                )
            }
        </CardsStyle>
    );
};

export default Cards;
