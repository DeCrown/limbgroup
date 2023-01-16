import React from 'react';
import styled from "styled-components";
import {Icons} from "../../utils/Images";

const LabelStyle = styled.div<any>`
  background-color: ${props => props.theme.color.red1}0F;
  color: ${props => props.theme.color.red1};
  width: 315px;
  height: 44px;
  border-radius: 22px;

  font-weight: 500;
  font-size: 14px;
  line-height: 100%;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  justify-content: start;
`;

const ImageStyle = styled.img`
  margin: 0 10px;
`;

const Label = (props: any) => {
    return (
        <LabelStyle {...props}>
            <ImageStyle src={Icons.alert}/>
            {props.children}
        </LabelStyle>
    );
};

export default Label;