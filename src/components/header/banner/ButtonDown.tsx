import React from 'react';
import styled from "styled-components";
import {ButtonMain} from "../../ui/Buttons";
import SvgIcons from "../../../utils/SvgIcons";
import Theme from "../../../utils/Theme";
import ScrollTo from "../../../utils/ScrollTo";

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  justify-content: center;
  padding-bottom: 67px;
  bottom: 0;
  
  .tablet & {
    padding-bottom: 64px;
  }
  .mobile & {
    padding-bottom: 30px;
  }
  
  & button {
    width: 110px;
    background-color: ${props => props.theme.color.green4};

    .tablet & {
      width: 80px;
    }
    .mobile & {
      width: 90px;
    }
  }
  
  & svg {
    transform: rotate(180deg);
  }
`;

const ButtonDown = () => {
    return (
        <ButtonContainer>
            <ButtonMain onClick={() => ScrollTo('about')}>
                {SvgIcons.arrow(Theme.color.white1)}
            </ButtonMain>
        </ButtonContainer>
    );
};

export default ButtonDown;