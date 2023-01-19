import {Components} from "../Images";
import React from "react";
import styled from "styled-components";

const TextStyle = styled.div`
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px; 
  color: ${props => props.theme.color.black0};
  
  .tablet & {
    font-size: 15px;
    line-height: 18px;
  }
`;

const AboutUsList = [
    {
        logo: Components.aboutUs[0],
        description: <TextStyle>Самый быстрый срок<br />запуска проекта - 7 дней</TextStyle>
    },
    {
        logo: Components.aboutUs[1],
        description: <TextStyle>20+ сотрудников  в штате</TextStyle>,
    },
    {
        logo: Components.aboutUs[2],
        description: <TextStyle>100+ обращений в день</TextStyle>,
    },
    {
        logo: Components.aboutUs[3],
        description: <TextStyle>Клиенты из трех стран</TextStyle>
    },
];

export default AboutUsList;