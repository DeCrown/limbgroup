import React from 'react';
import styled from "styled-components";
import Content from "../shared/Content";
import Logo from "./Logo";
import Menu from "./Menu";
import Contacts from "./Contacts";
import Projects from "./Projects";
import FeedbackLine from "./FeedbackLine";
import {useViewport} from "../../utils/ViewportContext";

const FooterContainerStyle = styled.div`
  position: relative;
`;

const FooterStyle = styled(Content)`
  background-color: ${props => props.theme.color.black1};
  height: 360px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;
  padding-top: 25px;
  box-sizing: border-box;
  grid-gap: 30px;
  
  .tablet & {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .mobile & {
    height: auto;
    grid-gap: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Footer = () => {
    const viewport = useViewport();

    return (
        <FooterContainerStyle id={'footer'}>
            <FeedbackLine />
            <FooterStyle>
                <Logo />
                <Menu />
                <Contacts />
                { viewport.device == 'desktop' ? <Projects /> : null }
            </FooterStyle>
        </FooterContainerStyle>
    );
};

export default Footer;
