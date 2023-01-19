import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  padding-left: 255px;
  padding-right: 255px;
  
  .tablet & {
    padding-left: 80px;
    padding-right: 80px;
  }

  .mobile & {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default Content;