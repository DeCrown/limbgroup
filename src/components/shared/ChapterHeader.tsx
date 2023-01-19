import React from 'react';
import styled from "styled-components";

const ChapterHeader = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  color: ${props => props.theme.color.black1};
  text-transform: uppercase;
  
  .mobile & {
    line-height: 42px;
  }
`;

export default ChapterHeader;