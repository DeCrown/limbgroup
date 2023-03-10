import React from 'react';
import FooterHeader from "../shared/FooterHeader";
import FooterText from "../shared/FooterText";
import styled from "styled-components";
import {ContactsConstants} from "../../utils/constants/Contacts";
import {ButtonIcon} from "../ui/Buttons";
import {FacebookLink, InstagramLink} from "../shared/Links";

const ContactsList = [
    {key: 'тел:', value: ContactsConstants.phones.footer[0]},
    {key: 'тел:', value: ContactsConstants.phones.footer[1]},
    {key: 'email:', value: ContactsConstants.email},
];

const ContactsListStyle = styled.div`
  margin-top: 10px;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
`;
const ContactsListKeysStyle = styled.div`
  display: grid;
  grid-gap: 10px;
`;
const ContactsListValuesStyle = styled.div`
  display: grid;
  grid-gap: 10px;
  user-select: text;
`;
const FooterTextValue = styled(FooterText)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.white1};
`;

const Links = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 10px;
  justify-content: start;
`;

const Link = styled(ButtonIcon)`
  & svg {
    fill: ${props => props.theme.color.white1};
  }
`;

const Contacts = () => {
    return (
        <div>
            <FooterHeader>Контакты</FooterHeader>
            <ContactsListStyle>
                <ContactsListKeysStyle>
                    {ContactsList.map((el, i) => <FooterText key={i}>{el.key}</FooterText>)}
                </ContactsListKeysStyle>
                <ContactsListValuesStyle>
                    {ContactsList.map((el, i) => <FooterTextValue key={i}>{el.value}</FooterTextValue>)}
                </ContactsListValuesStyle>
            </ContactsListStyle>
            <Links>
                <FacebookLink button={Link} />
                <InstagramLink button={Link} />
            </Links>
        </div>
    );
};

export default Contacts;
