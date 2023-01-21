import React from 'react';
import styled from "styled-components";

const TextareaStyle = styled.textarea`
  background-color: ${props => props.theme.color.white1};
  border: 1px solid ${props => props.theme.color.greyBorder1};
  border-radius: 22px;

  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.color.black1};

  width: 360px;
  height: 120px;
  box-sizing: border-box;
  padding: 10px 20px;

  resize: none;
  font-family: 'Roboto';

  &::placeholder {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.color.gray2};
    opacity: 1;
  }
`;

export const Textarea = (props: any) => {
    return (
        <TextareaStyle {...props} />
    );
};

export default Textarea;