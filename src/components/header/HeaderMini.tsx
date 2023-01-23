import React from 'react';
import styled from "styled-components";
import {Backgrounds} from "../../utils/Images";
import Menu from "./Menu";
import BannerMini from "./BannerMini";

const HeaderMiniStyle = styled.div`
  background-color: ${props => props.theme.color.black1};
  height: 270px;
  background-image: url("${Backgrounds.main.mini}");
  background-repeat: no-repeat;
  //background-size: 960px 270px;
  background-position: 100% 0px;
  position: relative;
  
  .tablet & {
    background-position: calc(100% + 112px) 0px;
  }
`;

const HeaderMini = (props: {text: string}) => {
    return (
        <HeaderMiniStyle id={'header'}>
            <Menu />
            <BannerMini text={props.text} />
        </HeaderMiniStyle>
    );
};

export default HeaderMini;
