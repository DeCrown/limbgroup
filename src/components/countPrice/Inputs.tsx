import React, {useState} from 'react';
import Select from "../ui/Select";
import styled from "styled-components";
import {SwitchReverse} from "../ui/Switches";

const Types = [
    { value: '1', label: 'Минимальный' },
    { value: '2', label: 'Шаблонный' },
    { value: '2.5', label: 'Уникальный' },
];

const Sizes = [
    { value: '1', label: 'Одностраничный' },
    { value: '1.75', label: 'Двухстраничный' },
    { value: '2', label: 'Трехстраничный' },
];

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

const Inputs = () => {
    const [type, setType] = useState(Types[0].value);
    const [size, setSize] = useState(Sizes[0].value);
    const [branding, setBranding] = useState(false);

    return (
        <InputsStyle>
            <SelectTypeStyle>
                <Select
                    defaultValue={type}
                    setValue={setType}
                    options={Types}
                />
            </SelectTypeStyle>
            <SelectSizeStyle>
                <Select
                    defaultValue={size}
                    setValue={setSize}
                    options={Sizes}
                />
            </SelectSizeStyle>
            <TextStyle>* По каждому проекту перечень работ разный</TextStyle>
            <BrandingOn onClick={() => setBranding(!branding)}>
                <SwitchReverse value={branding} />
                <BrandingText>Включить брендинг</BrandingText>
            </BrandingOn>
        </InputsStyle>
    );
};

export default Inputs;