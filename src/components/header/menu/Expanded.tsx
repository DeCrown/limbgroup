import React from 'react';
import styled from "styled-components";
import Content from "../../shared/Content";
import Contacts from "./Contacts";
import {Icons} from "../../../utils/Images";
import {TopMenuList} from "../../../utils/constants/Menu";
import {useViewport} from "../../../utils/ViewportContext";
import ScrollTo from "../../../utils/ScrollTo";

const ExpandedStyle = styled.div`
  position: fixed;
  right: -100%;
  z-index: 1;
  width: 100%;
  height: 100%;
  
  .mobile & {
    padding-bottom: 100px;
  }
`;

const ExpandedBackground = styled.div<{active: boolean}>`
  position: absolute;
  right: ${props => props.active ? 100 : 0}%;
  background-color: ${props => props.theme.color.black1}66;
  width: 100%;
  height: 100%;
`;

const MenuContainer = styled(Content)<{active: boolean}>`
  background-color: ${props => props.theme.color.black1}FA;
  position: absolute;
  right: ${props => props.active ? 100 : 0}%;
  transition: right 0.2s linear;
  width: 375px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 0px !important;
  
  .mobile & {
    width: 100%;
  }
`;

const MenuCloseStyle = styled.button`
  width: min-content;
  padding: 0 40px;
  display: grid;
  align-content: center;
  justify-self: end;
  margin-right: 40px;
  cursor: pointer;
  border: none;
  background-color: unset;
  
  .mobile &, .tablet & {
    margin-right: 0;
    padding: 30px 34px;
    align-content: start;
    height: min-content;
  }
  
  .tablet & {
    margin-right: 46px;
  }
`;

const TopContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  position: absolute;
  width: 100%;
  
  .mobile & {
    margin-right: -30px;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  justify-items: end;
  height: 100%;
  align-content: center;
  
  .mobile & {
    justify-items: center;
    margin-left: 30px;
  }
`;

const MenuItem = styled.a<{active: boolean}>`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.active ? props.theme.color.green2 : props.theme.color.white1};
  cursor: pointer;
  
  .mobile & {
    font-size: 18px;
    line-height: 18px;
  }
`;

const Expanded = (props: {active: boolean; setActive: (value: boolean) => void}) => {
    const viewport = useViewport();

    return (
        <ExpandedStyle>
            {
                viewport.device == 'tablet' && <ExpandedBackground active={props.active} />
            }
            <MenuContainer active={props.active}>
                <TopContainer>
                    <Contacts />
                    <MenuCloseStyle onClick={() => props.setActive(false)}>
                        <img src={Icons.close} />
                    </MenuCloseStyle>
                </TopContainer>
                <MainContainer>
                    {
                        (viewport.device == 'mobile' ? TopMenuList.mobile : TopMenuList.tablet).map((menu, i) =>
                            <MenuItem active={viewport.currentChapter == menu.chapter} key={i} onClick={() => ScrollTo(menu.chapter)}>
                                {menu.label}
                            </MenuItem>)
                    }
                </MainContainer>
            </MenuContainer>
        </ExpandedStyle>
    );
};

export default Expanded;