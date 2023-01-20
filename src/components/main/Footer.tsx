import React from 'react';
import styled from "styled-components";
import Content from "../shared/Content";
import Logo from "../footer/Logo";
import Menu from "../footer/Menu";
import Contacts from "../footer/Contacts";
import Projects from "../footer/Projects";
import FeedbackLine from "../footer/FeedbackLine";
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