import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icons} from "../../utils/Images";

const OptionStyle = styled.div`
  height: 44px;
  margin: 0 20px;
  cursor: pointer;
  display: grid;
  align-content: center;
`;

const Option = (props: {value: string, children: any; onClick: (value: string) => void}) => {
    return (
        <OptionStyle onClick={() => props.onClick(props.value)}>
            {props.children}
        </OptionStyle>
    );
}

const SelectStyle = styled.div`
  position: relative;
`;

const SelectInputStyle = styled.input`
  background-color: ${props => props.theme.color.white1};
  border-radius: 22px;
  border: none;

  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.color.black1};

  width: 360px;
  height: 44px;
  box-sizing: border-box;
  padding: 0 20px;
  cursor: pointer;
  
  background-image: url("${Icons.arrow.down}");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) 10px;
`;

const SelectMenu = styled.div<{active: boolean}>`
  display: ${props => props.active ? 'block' : 'none'};
  position: absolute;

  background-color: ${props => props.theme.color.white1};
  border-radius: 22px;

  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.color.black1};
  width: 100%;
  top: calc(100% + 10px);
  z-index: 1;
`;

const Select = (props: {options: {value: string; label: string}[];
    defaultValue: string; setValue: (value: string) => void}) => {
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    const [label, setLabel] = useState(props.options.find(option => option.value == props.defaultValue)?.label);

    const focus = () => {
        setActive(true);
        setHover(true);
    }

    const blur = () => {
        if (!hover) {
            setActive(false);
        }
    }

    const setValue = (value: string) => {
        props.setValue(value);
        setActive(false);
    }

    useEffect(() => {
        setLabel(props.options.find(option => option.value == props.defaultValue)?.label);
    }, [props.defaultValue])

    return (
        <SelectStyle onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}>
            <SelectInputStyle onFocus={focus} onBlur={blur} readOnly={true}
                              value={label} onChange={e => setLabel(e.target.value)} />
            <SelectMenu active={active}>
                {props.options/*.filter(option => option.value != props.defaultValue)*/.map((option, i) =>
                    <Option onClick={setValue} key={i} value={option.value}>{option.label}</Option>)}
            </SelectMenu>
        </SelectStyle>
    );
};

export default Select;