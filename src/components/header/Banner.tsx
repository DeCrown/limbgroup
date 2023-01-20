import React from 'react';
import styled from "styled-components";
import Scroller from "./banner/Scroller";
import Text from "./banner/Text";
import Image from "./banner/Image";
import Content from "../shared/Content";
import {useViewport} from "../../utils/ViewportContext";

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
    const viewport = useViewport();

    return (
        <BannerStyle>
            { viewport.device == 'desktop' ? <Scroller /> : null }
            {
                viewport.device == 'mobile'
                    ? <><Image /><Text /></>
                    : <><Text /><Image /></>
            }
        </BannerStyle>
    );
};

export default Banner;