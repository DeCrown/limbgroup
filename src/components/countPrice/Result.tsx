import React from 'react';
import styled from "styled-components";
import {WorkInitialPrices, WorkSizes, WorkTypes} from "../../utils/constants/CountPrice";

const ResultStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  
  /*.tablet & {
    margin-right: -80px;
  }*/
  .mobile & {
    margin-bottom: 90px;
  }
`;

const PriceStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: end;
  grid-gap: 1px;
`;

const TextStyle = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  color: ${props => props.theme.color.gray2};
  padding: 0 9px 20px 9px;
  border-bottom: 1px solid ${props => props.theme.color.gray2};
  
  .tablet & {
    font-size: 28px;
  }

  .mobile & {
    font-size: 24px;
  }
`;

const NumberStyle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 80%;
  text-align: center;
  color: ${props => props.theme.color.white1};
  padding: 0 15px 20px 15px;
  border-bottom: 1px solid ${props => props.theme.color.white1};
  white-space: nowrap;

  .tablet & {
    font-size: 52px;
  }
  
  .mobile & {
    font-size: 40px;
    line-height: 100%;
  }
`;

const SubText = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  color: ${props => props.theme.color.gray2};
  margin-top: 10px;
`;

const empty = {coefficient: 1};

const Result = (props: {type: string; size: string; branding: boolean}) => {
    let type = WorkTypes.find(type_ => type_.value == props.type) || empty;
    let size = WorkSizes.find(size_ => size_.value == props.size) || empty;
    let price = WorkInitialPrices.type * type.coefficient +
        WorkInitialPrices.size * size.coefficient +
        (props.branding ? WorkInitialPrices.branding : 0);

    return (
        <ResultStyle>
            <PriceStyle>
                <TextStyle>от</TextStyle>
                <NumberStyle>{Math.round(price).toLocaleString()}</NumberStyle>
                <TextStyle>₽</TextStyle>
            </PriceStyle>
            <SubText>Предварительный расчет</SubText>
        </ResultStyle>
    );
};

export default Result;