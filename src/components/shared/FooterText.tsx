import React from 'react';
import styled from "styled-components";

const FooterText = styled.div`
  font-weight: 700;
  font-size: 13px;
  color: ${props => props.theme.color.white1}8C;

  .tablet & {
    font-size: 12px;
  }
`;

export default FooterText;