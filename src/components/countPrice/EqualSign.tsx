import React from 'react';
import {Components} from "../../utils/Images";
import styled from "styled-components";

const EqualSignStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  
  & img {
    width: 150px;
    height: 47px;
  }
  .tablet & img {
    //width: 130px;
  }
`;

const EqualSign = () => {
    return (
        <EqualSignStyle>
            <img src={Components.equalSign}></img>
        </EqualSignStyle>
    );
};

export default EqualSign;