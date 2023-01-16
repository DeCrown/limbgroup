import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const ButtonStyle = styled.div`
  height: 50px;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${props => props.theme.color.white1};
  
  &.chosen {
    color: ${props => props.theme.color.green2};
  }
`;

const Button = (props: {children: any, button_i: number, chosen: boolean, setValue: (i: number) => void}) => {
    return (
        <ButtonStyle className={props.chosen ? 'chosen' : undefined} onClick={() => props.setValue(props.button_i)}>{props.children}</ButtonStyle>
    );
};

const ButtonsStyle = styled.div`
  position: relative;
`;
const ButtonsListStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
`;
const ButtonsList = [
    'О нас',
    'Цены',
    'Наши клиенты'
];
const Underline = styled.div<{width: number, left: number}>`
  position: absolute;
  bottom: 0;
  width: ${props => props.width}px;
  left: ${props => props.left}px;
  height: 4px;
  background-color: ${props => props.theme.color.green1}5A;
`;

const Buttons = () => {
    const [chosen_i, setChosen_i] = useState(0);
    const [chosenElement, setChosenElement] = useState<any>(null);

    useEffect(() => {
        setChosenElement(document.getElementsByClassName('chosen')[0]);
    }, [chosen_i]);

    return (
        <ButtonsStyle className={'menuButtons'}>
            <ButtonsListStyle>
                {ButtonsList.map((button, i) =>
                    <Button key={i} button_i={i} chosen={i == chosen_i} setValue={setChosen_i} >{button}</Button>)}
            </ButtonsListStyle>
            <Underline width={chosenElement?.clientWidth}
                       left={chosenElement?.getBoundingClientRect().x - document.getElementsByClassName('menuButtons')[0]?.getBoundingClientRect().x} >
            </Underline>
        </ButtonsStyle>
    );
};

export default Buttons;