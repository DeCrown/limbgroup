import React from 'react';
import styled from "styled-components";

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 360fr 380fr;
  grid-gap: 30px;
  flex-basis: 700px;
`;

const TextStyle = styled.div`
  font-weight: 500;
  font-size: 64px;
  line-height: 75px;
  text-transform: uppercase;
  color: ${props => props.theme.color.white1};
  align-self: end;
  
  .tablet & {
    font-size: 46px;
    line-height: 54px;
  }
  
  .mobile & {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
  }
`;

const SubTextStyle = styled.div`
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  color: ${props => props.theme.color.white1};
  
  .tablet & {
    font-size: 30px;
    line-height: 35px;
  }
  
  .mobile & {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`;

const Text = () => {
    return (
        <TextContainer>
            <TextStyle>Limb Group - новый взгляд на бизнес!</TextStyle>
            <SubTextStyle>Помогаем полностью вывести ваш бизнес в Digital пространство.</SubTextStyle>
        </TextContainer>
    );
};

export default Text;