import React from 'react';
import styled from "styled-components";

const FooterHeader = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${props => props.theme.color.white1};
  
  .mobile & {
    color: ${props => props.theme.color.green2};
  }
`;

export default FooterHeader;