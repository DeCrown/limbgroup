import React from 'react';
import styled from "styled-components";

const ChapterText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.color.black0};

  .tablet & {
    font-size: 16px;
    line-height: 19px;
  }
`;

export default ChapterText;