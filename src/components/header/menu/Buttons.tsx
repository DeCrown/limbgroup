import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {TopMenuList} from "../../../utils/constants/Menu";
import ScrollTo from "../../../utils/ScrollTo";
import {useViewport} from "../../../utils/ViewportContext";
import {Icons} from "../../../utils/Images";

const ButtonStyle = styled.div<{active: boolean}>`
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  color: ${props => props.active ? props.theme.color.green2 : props.theme.color.white1};
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  
  &:nth-child(5)::after {
    content: '';
    display: block;
    width: 17px;
    height: 17px;
    position: absolute;
    right: -16px;
    top: -14px;
    background-image: url("${Icons.gamepad}");
  }
`;

const Button = (props: {children: any; active: boolean; chapter: string; myref: any}) => {
    return (
        <ButtonStyle ref={props.myref ? props.myref : undefined} active={props.active} onClick={() => ScrollTo(props.chapter)}>{props.children}</ButtonStyle>
    );
};

const ButtonsStyle = styled.div`
  position: relative;
`;
const ButtonsListStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  padding: 35px 20px 40px 20px;
  grid-gap: 50px;
`;
const Underline = styled.div<{width: number, left: number}>`
  position: absolute;
  bottom: 24px;
  width: ${props => props.width}px;
  left: ${props => props.left}px;
  transition: left 0.1s linear, width 0.1s linear;
  & div {
    width: 100%;
    height: 4px;
  }
  & div:nth-child(1) {
    background-color: ${props => props.theme.color.green1};
  }
  & div:nth-child(2) {
    background-color: ${props => props.theme.color.green1}5A;
  }
  & div:nth-child(3) {
    background-color: ${props => props.theme.color.green1}1A;
  }
`;

const Buttons = () => {
    const viewport = useViewport();
    const activeElement = useRef<any>(null);

    return (
        <ButtonsStyle className={'menuButtons'}>
            <ButtonsListStyle>
                {TopMenuList.desktop.map((button, i) =>
                    <Button key={i} myref={button.chapter == viewport.currentChapter ? activeElement : null}
                            active={button.chapter == viewport.currentChapter} chapter={button.chapter}>{button.label}</Button>)}
            </ButtonsListStyle>
            <Underline width={(activeElement.current?.clientWidth + 24) | 0}
                       left={activeElement.current?.getBoundingClientRect().x - document.getElementsByClassName('menuButtons')[0]?.getBoundingClientRect().x - 12}>
                <div></div>
                <div></div>
                <div></div>
            </Underline>
        </ButtonsStyle>
    );
};

export default Buttons;
