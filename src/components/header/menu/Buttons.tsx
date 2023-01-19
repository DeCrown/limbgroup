import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const ButtonStyle = styled.div`
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  color: ${props => props.theme.color.white1};
  cursor: pointer;
  white-space: nowrap;
  
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
  justify-content: center;
  padding: 35px 20px 40px 20px;
  grid-gap: 50px;
`;
const ButtonsList = [
    'О нас',
    'Цены',
    'Наши клиенты',
    'Завершенные проекты',
    'Relax Zone',
    'Контакты'
];
const Underline = styled.div<{width: number, left: number}>`
  position: absolute;
  bottom: 24px;
  width: ${props => props.width}px;
  left: ${props => props.left}px;
  transition: left 0.1s linear, width 0.1s linear;
  & div {
    width: 100%;
    height: 4px;
  }
  & div:nth-child(1) {
    background-color: ${props => props.theme.color.green1};
  }
  & div:nth-child(2) {
    background-color: ${props => props.theme.color.green1}5A;
  }
  & div:nth-child(3) {
    background-color: ${props => props.theme.color.green1}1A;
  }
`;

const Buttons = () => {
    const [chosen_i, setChosen_i] = useState<number|null>(null);
    const [chosenElement, setChosenElement] = useState<any>(null);

    useEffect(() => {
        setChosenElement(document.getElementsByClassName('chosen')[0]);
    }, [chosen_i]);

    useEffect(() => {
        window.onload = () => {
            setChosen_i(0);
        };
    }, []);

    return (
        <ButtonsStyle className={'menuButtons'}>
            <ButtonsListStyle>
                {ButtonsList.map((button, i) =>
                    <Button key={i} button_i={i} chosen={i == chosen_i} setValue={setChosen_i} >{button}</Button>)}
            </ButtonsListStyle>
            <Underline width={(chosenElement?.clientWidth + 24) | 0}
                       left={chosenElement?.getBoundingClientRect().x - document.getElementsByClassName('menuButtons')[0]?.getBoundingClientRect().x - 12}>
                <div></div>
                <div></div>
                <div></div>
            </Underline>
        </ButtonsStyle>
    );
};

export default Buttons;