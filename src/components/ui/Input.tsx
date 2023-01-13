import React from 'react';
import styled from "styled-components";

const InputStyle = styled.input`
  background-color: ${props => props.theme.color.white1};
  border: 1px solid ${props => props.theme.color.greyBorder1};
  border-radius: 22px;

  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: ${props => props.theme.color.black1};

  width: 360px;
  height: 44px;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Input = () => {
    return (
        <InputStyle type={'text'} />
    );
};

export default Input;