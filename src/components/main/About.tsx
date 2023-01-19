import React from 'react';
import styled from "styled-components";
import Text from "../about/Text";
import Images from "../about/Images";
import Content from "../shared/Content";
import {DEVICE} from "../../utils/Device";

const AboutStyle = styled(Content)`
  background-color: ${props => props.theme.color.white2};
  height: 726px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 140px;
  padding-bottom: 100px;
  box-sizing: border-box;
  grid-gap: 100px;

  .mobile & {
    height: auto;
    padding-top: 40px;
    padding-bottom: 90px;
    grid-template-columns: 1fr;
  }
`;

const About = () => {
    return (
        <AboutStyle>
            <Text />
            {
                DEVICE == 'mobile' ? null : <Images />
            }
        </AboutStyle>
    );
};

export default About;