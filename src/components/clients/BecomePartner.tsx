import React from 'react';
import styled from "styled-components";
import {Components} from "../../utils/Images";
import ButtonGroup from "../shared/ButtonGroup";
import {ButtonIconWithBackground, ButtonMain} from "../ui/Buttons";
import SvgIcons from "../../utils/SvgIcons";
import Theme from "../../utils/Theme";
import {useViewport} from "../../utils/ViewportContext";

const BecomePartnerStyle = styled.div`
  height: 566px;
  width: 371px;
  flex-shrink: 0;
  background-image: url("${Components.feedback.desktop}");
  position: relative;
  display: grid;
  justify-content: center;
  align-self: end;
  
  .mobile & {
    height: auto;
    width: 100%;
    background-image: none;
  }
`;

const MobileImage = styled.img`
  //width: calc(100vw - 21px);
  width: 100vw;
`;

const MobileContainer = styled.div`
  .mobile & {
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 50px;
    align-content: center;
  }
`;

const ButtonGroupStyle = styled(ButtonGroup)`
  position: absolute;
  top: 356px;
  left: 0;
  
  .mobile & {
    position: relative;
    top: auto;
    left: auto;
    background: linear-gradient(270deg, ${props => props.theme.color.green1}4C 0%, ${props => props.theme.color.black1}4C 100%);
  }
`;

const TextStyle = styled.div`
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: ${props => props.theme.color.white1};
  margin-top: 167px;
  
  .mobile & {
    margin-top: 0;
    position: relative;
  }
`;

const BecomePartner = () => {
    const viewport = useViewport();

    return (
        <BecomePartnerStyle>
            {
                viewport.device == 'mobile' ? <MobileImage src={Components.feedback.mobile} /> : null
            }
            <MobileContainer>
                <TextStyle>Станьте<br/>нашим<br/>партнером!</TextStyle>
                <ButtonGroupStyle>
                    <ButtonMain>Связаться</ButtonMain>
                    <ButtonIconWithBackground>{SvgIcons.facebook(Theme.color.white1)}</ButtonIconWithBackground>
                    <ButtonIconWithBackground>{SvgIcons.instagram(Theme.color.white1)}</ButtonIconWithBackground>
                </ButtonGroupStyle>
            </MobileContainer>
        </BecomePartnerStyle>
    );
};

export default BecomePartner;