import React from 'react';
import styled from "styled-components";

const InputStyle = styled.input<{error?: boolean}>`
  background-color: ${props => props.error ? '#FBF1F2' : props.theme.color.white1};
  border: 1px solid ${props => props.theme.color.greyBorder1};
  border-radius: 22px;

  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.color.black1};

  width: 360px;
  height: 44px;
  box-sizing: border-box;
  padding: 0 20px;
  
  &::placeholder {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.color.gray2};
    opacity: 1;
  }
`;

const Input = (props: any) => {
    return (
        <InputStyle type={'text'} {...props} />
    );
};

export default Input;