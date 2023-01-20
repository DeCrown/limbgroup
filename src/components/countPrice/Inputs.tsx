import React, {useState} from 'react';
import Select from "../ui/Select";
import styled from "styled-components";
import {SwitchReverse} from "../ui/Switches";
import {WorkSizes, WorkTypes} from "../../utils/constants/CountPrice";

const InputsStyle = styled.div`
  & input {
    .desktop & {
      width: 404px;
    }

    .mobile & {
      width: 100%;
    }
  }
`;

const SelectTypeStyle = styled.div`
  margin-top: 80px;
  
  .mobile & {
    margin-top: 95px;
  }
`;

const SelectSizeStyle = styled.div`
  margin-top: 40px;
`;

const TextStyle = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: ${props => props.theme.color.white1};
  opacity: 0.6;
  margin-top: 10px;
`;

const BrandingOn = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  cursor: pointer;
`;

const BrandingText = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  color: ${props => props.theme.color.white1};
`;

const Inputs = (props: {
    type: string;
    setType: (value: string) => void;
    size: string;
    setSize: (value: string) => void;
    branding: boolean;
    setBranding: (value: boolean) => void;
}) => {
    return (
        <InputsStyle>
            <SelectTypeStyle>
                <Select
                    defaultValue={props.type}
                    setValue={props.setType}
                    options={WorkTypes}
                />
            </SelectTypeStyle>
            <SelectSizeStyle>
                <Select
                    defaultValue={props.size}
                    setValue={props.setSize}
                    options={WorkSizes}
                />
            </SelectSizeStyle>
            <TextStyle>* По каждому проекту перечень работ разный</TextStyle>
            <BrandingOn onClick={() => props.setBranding(!props.branding)}>
                <SwitchReverse value={props.branding} />
                <BrandingText>Включить брендинг</BrandingText>
            </BrandingOn>
        </InputsStyle>
    );
};

export default Inputs;