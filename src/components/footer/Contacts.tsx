import React from 'react';
import FooterHeader from "../shared/FooterHeader";
import FooterText from "../shared/FooterText";
import styled from "styled-components";

const ContactsList = [
    {key: 'тел:', value: '+7 (916) 217 10 07'},
    {key: 'тел:', value: '+7 (977) 362 42 38'},
    {key: 'email:', value: 'company@limbgroup.com'},
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
`;
const FooterTextValue = styled(FooterText)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.white1};
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
        </div>
    );
};

export default Contacts;