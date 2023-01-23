import React from 'react';
import styled from "styled-components";
import Content from "../shared/Content";
import ChapterHeader from "../shared/ChapterHeader";

const BannerMiniStyle = styled(Content)`
  display: flex;
  height: calc(100% - 90px);
  position: relative;
  
  .mobile & {
    height: calc(100% - 80px);
  }
`;

const Header = styled(ChapterHeader)`
  color: ${props => props.theme.color.white1};
  display: grid;
  align-content: end;
  margin-bottom: 30px;
`;

const BannerMini = (props: {text: string}) => {
    return (
        <BannerMiniStyle>
            <Header>{props.text}</Header>
        </BannerMiniStyle>
    );
};

export default BannerMini;
