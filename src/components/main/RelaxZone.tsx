import React from 'react';
import styled from "styled-components";
import Content from "../shared/Content";
import ChapterHeader from "../shared/ChapterHeader";
import FlappyBird from "../relaxZone/FlappyBird";

const RelaxZoneStyle = styled(Content)`
  //height: 894px;
  padding-bottom: 229px;
  
  .tablet & {
    //height: 756px;
    padding-bottom: 225px;
  }
`;

const RelaxZone = () => {
    return (
        <RelaxZoneStyle id={'relax'}>
            <ChapterHeader>RELAX ZONE</ChapterHeader>
            <FlappyBird />
        </RelaxZoneStyle>
    );
};

export default RelaxZone;