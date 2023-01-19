import React from 'react';
import styled from "styled-components";

const CardStyle = styled.div`
  //height: 260px;
  height: 100%;
  width: 209px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-gap: 10px;
  
  .mobile & {
    position: absolute;
    transition: left 0.2s linear;
    width: 100%;
  }
`;

const LogoStyle = styled.div`
  display: grid;
  justify-items: center;
  
  & img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .mobile & {
    grid-template-rows: 100%;
  }
`;

const TextStyle = styled.div`
  display: grid;
  align-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  
  & div {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    .mobile & {
      -webkit-line-clamp: 3;
    }
  }
  
  .mobile & {
    justify-items: center;
  }
`;

const Card = (props: {logo: string, description: any; slider?: {active_i: number; i: number}}) => {
    let style_ = {};
    if (props.slider) {
        style_ = {left: 100 * (props.slider.i - props.slider.active_i) + '%'}
    }
    return (
        <CardStyle style={style_}>
            <LogoStyle><img src={props.logo} /></LogoStyle>
            <TextStyle><div>{props.description}</div></TextStyle>
        </CardStyle>
    );
};

export default Card;