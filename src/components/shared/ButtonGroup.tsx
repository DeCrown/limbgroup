import React from 'react';
import styled from "styled-components";

const ButtonGroup = styled.div`
  width: 328px;
  background: linear-gradient(270deg, #8A8A8A26 0%, rgba(138, 138, 138, 0) 100%);
  border-radius: 22px;
  height: min-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  align-items: center;
  justify-content: end;
  
  .mobile & {
    width: 100%;
    grid-template-columns: 1fr auto auto;
  }
`;

export default ButtonGroup;