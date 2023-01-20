import React from 'react';
import styled from "styled-components";
import Text from "../about/Text";
import Images from "../about/Images";
import Content from "../shared/Content";
import {useViewport} from "../../utils/ViewportContext";

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
    const viewport = useViewport();

    return (
        <AboutStyle id={'about'}>
            <Text />
            {
                viewport.device == 'mobile' ? null : <Images />
            }
        </AboutStyle>
    );
};

export default About;