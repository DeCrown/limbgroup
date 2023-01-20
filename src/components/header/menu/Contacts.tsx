import React from 'react';
import styled from "styled-components";
import {ContactsConstants} from "../../../utils/constants/Contacts";
import SvgIcons from "../../../utils/SvgIcons";
import Theme from "../../../utils/Theme";

const ContactsStyle = styled.div`
  width: 160px;
  height: 52px;
  padding: 19px 0px 19px 0;

  display: grid;
  grid-template-columns: 18px auto;
  
  .mobile &, .tablet & {
    padding: 30px 0 0 0;
    height: 70px;
    display: grid;
    grid-template-columns: 66px auto;
    width: auto;
  }
`;

const PhoneSlider = styled.div`
  display: grid;
  grid-gap: 4px;
  align-content: start;
  justify-content: start;
  
  .tablet &, .mobile & {
    justify-content: center;
  }
  
  & div {
    width: 6px;
    height: 6px;
    background: ${props => props.theme.color.green2};
    border-radius: 3px;
  }
  
  & div:nth-child(2) {
    background: ${props => props.theme.color.green2}59;
  }
`;

const PhoneNumber = styled.div`
  text-align: right;
  font-weight: 400;
  font-size: 18px;
  color: ${props => props.theme.color.white1};
`;

const Links = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  justify-content: end;
  padding-top: 10px;
  
  .tablet & {
    padding-top: 24px;
  }

  .mobile & {
    padding-top: 20px;
  }
`;

const RightContainer = styled.div`
  display: grid;
  justify-items: end;

  .tablet &, .mobile & {
    justify-items: start;
  }
`;

const Contacts = () => {
    return (
        <ContactsStyle>
            <PhoneSlider>
                <div></div>
                <div></div>
            </PhoneSlider>
            <RightContainer>
                <PhoneNumber>{ContactsConstants.phones.header}</PhoneNumber>
                <Links>
                    {SvgIcons.instagram(Theme.color.white1)}
                    {SvgIcons.facebook(Theme.color.white1)}
                </Links>
            </RightContainer>
        </ContactsStyle>
    );
};

export default Contacts;