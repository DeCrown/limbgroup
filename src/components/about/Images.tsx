import React from 'react';
import styled from "styled-components";
import AboutUsList from "../../utils/constants/AboutUs";

const ImagesStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  align-items: baseline;
  max-width: 700px;
  width: 100%;
  grid-gap: 0 20px;
`;

const Block = styled.div`
  display: grid;
  grid-gap: 22px;
  align-content: center;
  justify-items: center;
`;

const Images = () => {
    return (
        <ImagesStyle>
            {
                AboutUsList.map((about, i) => <Block key={i}>
                    <img src={about.logo} />
                    {about.description}
                </Block>)
            }
        </ImagesStyle>
    );
};

export default Images;