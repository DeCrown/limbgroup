import React from 'react';
import {Components} from "../../../utils/Images";
import styled from "styled-components";

const ScrollerStyle = styled.div`
  /*padding: 147px 0 200px 48px;
  flex-basis: 245px;*/
  position: absolute;
  left: 48px;
  top: 147px;
`;

const Scroller = () => {
    return (
        <ScrollerStyle>
            <img src={Components.sectionsScroller} />
        </ScrollerStyle>
    );
};

export default Scroller;