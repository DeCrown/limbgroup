import React from 'react';
import styled from "styled-components";
import Scroller from "./banner/Scroller";
import Text from "./banner/Text";
import Image from "./banner/Image";
import {DEVICE} from "../../utils/Device";
import Content from "../shared/Content";

const BannerStyle = styled(Content)`
  /*display: grid;
  grid-template-columns: minmax(116px, 245px) auto 50%;*/
  display: flex;
  height: calc(100% - 90px);
  position: relative;
  
  .mobile & {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
`;

const Banner = () => {
    return (
        <BannerStyle>
            { DEVICE == 'desktop' ? <Scroller /> : null }
            {
                DEVICE == 'mobile'
                    ? <><Image /><Text /></>
                    : <><Text /><Image /></>
            }
        </BannerStyle>
    );
};

export default Banner;