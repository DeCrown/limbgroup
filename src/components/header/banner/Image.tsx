import React from 'react';
import {Components} from "../../../utils/Images";
import styled from "styled-components";

const ImageStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  //padding-right: 118px;
  margin-right: -10px;
  //flex-basis: calc(50% - 118px);
  & img {
    width: 100%;
    min-width: 508px;
    
    .mobile & {
      width: auto;
      min-width: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  
  .mobile & {
    margin-right: 0px;
    padding: 30px 20px 2px 20px;
    justify-items: center;
  }
`;

const Image = () => {
    return (
        <ImageStyle>
            <img src={Components.computer} />
        </ImageStyle>
    );
};

export default Image;