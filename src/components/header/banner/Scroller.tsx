import React from 'react';
import {Components} from "../../../utils/Images";
import styled from "styled-components";
import {TopMenuList} from "../../../utils/constants/Menu";
import SvgIcons from "../../../utils/SvgIcons";
import {useViewport} from "../../../utils/ViewportContext";

const ScrollerStyle = styled.div`
  /*padding: 147px 0 200px 48px;
  flex-basis: 245px;*/
  position: fixed;
  left: 56px;
  top: 237px;
  z-index: 1;
`;

const ScrollItemStyle = styled.div<{active: boolean}>`
  fill: ${props => props.active ? props.theme.color.green1 : props.theme.color.green1 + '40'};
  position: relative;
  left: ${props => props.active ? 6 : 0}px;
  transition: left 0.1s linear, background-color 0.1s linear;
  
  & div {
    display: ${props => props.active ? 'grid' : 'none'};
    position: absolute;
    left: -14px;
    top: 9px;
    height: 51px;
    align-content: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${props => props.theme.color.green1};
  }
`;

const ScrollItem = (props: {i: number; active: boolean}) => {
    return (
        <ScrollItemStyle active={props.active}>
            <div>{props.i}</div>
            {SvgIcons.scroller.main('inherit')}
        </ScrollItemStyle>
    );
}

const Scroller = () => {
    const viewport = useViewport();

    return (
        <ScrollerStyle>
            {
                TopMenuList.scroller.map((item, i) => <ScrollItem key={i} i={i + 1} active={item.chapter == viewport.currentChapter} />)
            }
        </ScrollerStyle>
    );
};

export default Scroller;