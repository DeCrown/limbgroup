import React, {useState} from 'react';
import styled from "styled-components";
import {Backgrounds} from "../../utils/Images";
import ChapterHeader from "../shared/ChapterHeader";
import Content from "../shared/Content";
import Inputs from "../countPrice/Inputs";
import EqualSign from "../countPrice/EqualSign";
import Result from "../countPrice/Result";
import {useViewport} from "../../utils/ViewportContext";
import {WorkSizes, WorkTypes} from "../../utils/constants/CountPrice";

const CountPriceStyle = styled(Content)`
  background-color: ${props => props.theme.color.black1};
  height: 490px;
  background-image: url("${Backgrounds.countPrice.desktop}");
  background-repeat: no-repeat;
  background-position: calc(100% + 210px) 0px;
  padding-top: 60px;
  box-sizing: border-box;
  
  .tablet & {
    background-image: url("${Backgrounds.countPrice.tablet}");
    background-position: calc(100% + 210px) 0px;
  }
  
  .mobile & {
    height: auto;
    padding-top: 40px;
  }
`;

const ChapterHeaderStyle = styled(ChapterHeader)`
  color: ${props => props.theme.color.white1};
`;

const CountPriceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  .mobile & {
    grid-template-columns: 1fr;
    grid-gap: 88px;
  }
`;

const CountPrice = () => {
    const viewport = useViewport();
    const [type, setType] = useState(WorkTypes[0].value);
    const [size, setSize] = useState(WorkSizes[0].value);
    const [branding, setBranding] = useState(false);

    return (
        <CountPriceStyle id={'price'}>
            <ChapterHeaderStyle>Расчитать стоимость заказа</ChapterHeaderStyle>
            <CountPriceContainer>
                <Inputs type={type} setType={setType}
                        size={size} setSize={setSize}
                        branding={branding} setBranding={setBranding} />
                { viewport.device == 'mobile' ? null : <EqualSign />}
                <Result type={type} size={size} branding={branding} />
            </CountPriceContainer>
        </CountPriceStyle>
    );
};

export default CountPrice;