import React from 'react';
import styled from "styled-components";

const SwitchStyle = styled.div<{checked: boolean}>`
  background-color: ${props => props.theme.color.gray2}22;
  border-radius: 9px;

  width: 30px;
  height: 14px;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.1s linear;
  
  & > div {
    background-color: ${props => props.theme.color.gray2};
    border-radius: 7px;

    width: 14px;
    height: 14px;
    position: relative;
    left: ${props => props.checked ? 16 : 0}px;
    transition: left 0.1s linear;
  }
`;

interface SwitchProps {
    mode?: any;
    value: boolean;
    setValue?: (value: boolean) => void;
}

export const SwitchGray = (props: SwitchProps) => {
    const Mode = props.mode ? props.mode : SwitchStyle;
    const click = () => {
        if (props.setValue) {
            props.setValue(!props.value);
        }
    }

    return (
        <Mode onClick={click} checked={props.value}>
            <div/>
        </Mode>
    );
}

/* RED */

const SwitchRedStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.red1}22;
  & > div {
    background-color: ${props => props.theme.color.red1};
  }
`;

export const SwitchRed = (props: SwitchProps) => <SwitchGray {...props} mode={SwitchRedStyle} />;

/* GREEN */

const SwitchGreenStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.green1}22;
  & > div {
    background-color: ${props => props.theme.color.green1};
  }
`;

export const SwitchGreen = (props: SwitchProps) => <SwitchGray {...props} mode={SwitchGreenStyle}/>;

/* BLACK */

const SwitchBlackStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.black1}22;
  & > div {
    background-color: ${props => props.theme.color.black1};
  }
`;

export const SwitchBlack = (props: SwitchProps) => <SwitchGray {...props} mode={SwitchBlackStyle}/>;

/* WHITE */

const SwitchWhiteStyle = styled(SwitchStyle)`
  background-color: ${props => props.checked ? props.theme.color.green1 : props.theme.color.black1 + '40'};
  & > div {
    background-color: ${props => props.theme.color.white1};
  }
`;

export const SwitchWhite = (props: SwitchProps) => <SwitchGray {...props} mode={SwitchWhiteStyle}/>;

/* REVERSE */

const SwitchReverseStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.white1};
  & > div {
    background-color: ${props => props.theme.color.black1};
  }
`;

export const SwitchReverse = (props: SwitchProps) => <SwitchGray {...props} mode={SwitchReverseStyle}/>;
