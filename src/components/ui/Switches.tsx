import React, {useState} from 'react';
import styled from "styled-components";

const SwitchStyle = styled.div`
  background-color: ${props => props.theme.color.gray2}22;
  border-radius: 9px;

  width: 30px;
  height: 14px;
  padding: 2px;
  cursor: pointer;
  
  & > div {
    background-color: ${props => props.theme.color.gray2};
    border-radius: 7px;

    width: 14px;
    height: 14px;
    position: relative;
    left: 0;
    transition: left 0.2s linear;
  }
  
  &.checked > div {
    left: 16px;
  }
`;

export const SwitchGray = (props: any) => {
    const [value, setValue] = useState(false);
    const Mode = props.mode ? props.mode : SwitchStyle;

    return (
        <Mode onClick={() => setValue(!value)} className={value ? 'checked' : null}>
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

export const SwitchRed = () => <SwitchGray mode={SwitchRedStyle}><div /></SwitchGray>;

/* GREEN */

const SwitchGreenStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.green1}22;
  & > div {
    background-color: ${props => props.theme.color.green1};
  }
`;

export const SwitchGreen = () => <SwitchGray mode={SwitchGreenStyle}><div /></SwitchGray>;

/* BLACK */

const SwitchBlackStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.black1}22;
  & > div {
    background-color: ${props => props.theme.color.black1};
  }
`;

export const SwitchBlack = () => <SwitchGray mode={SwitchBlackStyle}><div /></SwitchGray>;

/* WHITE */

const SwitchWhiteStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.black1}22;
  & > div {
    background-color: ${props => props.theme.color.white1};
  }
`;

export const SwitchWhite = () => <SwitchGray mode={SwitchWhiteStyle}><div /></SwitchGray>;

/* REVERSE */

const SwitchReverseStyle = styled(SwitchStyle)`
  background-color: ${props => props.theme.color.white1};
  & > div {
    background-color: ${props => props.theme.color.black1};
  }
`;

export const SwitchReverse = () => <SwitchGray mode={SwitchReverseStyle}><div /></SwitchGray>;
