import React from 'react';
import styled from "styled-components";

const SelectStyle = styled.select`
  background-color: ${props => props.theme.color.white1};
  border-radius: 22px;
  border: none;

  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: ${props => props.theme.color.black1};

  width: 360px;
  height: 44px;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Select = () => {
    return (
        <SelectStyle>
            <option selected={true}>один</option>
            <option>два</option>
            <option>три</option>
            <option>четыре</option>
        </SelectStyle>
    );
};

export default Select;