import styled from "styled-components";
import React from "react";

const Button = styled.button`
  background-color: ${props => props.theme.color.green1};
  height: 44px;
  width: 200px;
  position: relative;
  left: 0px;
  top: 0px;
  border-radius: 22px;
  display: grid;
  align-content: center;
  justify-content: center;
  
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  text-align: center;
  text-transform: uppercase;

  color: ${props => props.theme.color.white1};
  border: none;
  cursor: pointer;
`;

/* MAIN */

const ButtonMainStyle = styled(Button)`
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

export const ButtonMain = (props: any) => {
    return (
        <ButtonMainStyle {...props}>
            {props.children}
        </ButtonMainStyle>
    );
};

/* SOFT */

const ButtonSoftStyle = styled(Button)`
  background-color: ${props => props.theme.color.green1}0F;
  color: ${props => props.theme.color.green1};
`;

export const ButtonSoft = (props: any) => {
    return (
        <ButtonSoftStyle {...props}>
            {props.children}
        </ButtonSoftStyle>
    );
};

/* MAIN MIN */

const ButtonMainMinStyle = styled(ButtonMainStyle)`
  width: 160px;
  height: 34px;
`;

export const ButtonMainMin = (props: any) => {
    return (
        <ButtonMainMinStyle {...props}>
            {props.children}
        </ButtonMainMinStyle>
    );
};

/* SOFT MIN */

const ButtonSoftMinStyle = styled(ButtonSoftStyle)`
  width: 200px;
  height: 32px;
`;

export const ButtonSoftMin = (props: any) => {
    return (
        <ButtonSoftMinStyle {...props}>
            {props.children}
        </ButtonSoftMinStyle>
    );
};

/* ICON NO BACKGROUND */

const ButtonIconStyle = styled(ButtonSoft)`
  width: 44px;
  background: none;
`;

export const ButtonIcon = (props: any) => {
    return (
        <ButtonIconStyle {...props}>
            {props.children}
        </ButtonIconStyle>
    );
};

/* ICON BACKGROUND */

const ButtonIconWithBackgroundStyle = styled(ButtonSoft)`
  width: 44px;
`;

export const ButtonIconWithBackground = (props: any) => {
    return (
        <ButtonIconWithBackgroundStyle {...props}>
            {props.children}
        </ButtonIconWithBackgroundStyle>
    );
};