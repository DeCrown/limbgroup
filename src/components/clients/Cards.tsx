import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Card from "../shared/Card";
import SvgIcons from "../../utils/SvgIcons";

const CardsStyle = styled.div`
  height: 352px;
  width: 100%;
`;

const CardsContainer = styled.div<{left: number}>`
  height: 260px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 30px;
  position: absolute;
  left: ${props => props.left}px;
  transition: left 0.2s linear;
`;

const CardsScroller = styled.div`
  width: 100%;
  overflow: hidden;
  height: 260px;
  position: relative;
`;

const Overflow = styled.div`
  width: 120px;
  height: 100%;
  position: absolute;
  right: 0;
  background: linear-gradient(270deg, ${props => props.theme.color.white2} 0%, rgba(249, 249, 249, 0) 57.5%);
`;

const ScrollBar = styled.div<{width: number; left: number}>`
  height: 4px;
  width: 100%;
  background-color: ${props => props.theme.color.gray0};
  border-radius: 3px;
  margin-top: 40px;
  
  & div {
    height: 4px;
    background-color: ${props => props.theme.color.green1};
    border-radius: 3px;
    position: relative;
    width: ${props => props.width}%;
    left: ${props => props.left}%;
    transition: left 0.2s linear;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 60px;
  height: 32px;
  cursor: pointer;
  background-color: ${props => props.theme.color.green1}0F;
  border: none;
  border-radius: 16px;
  fill: ${props => props.theme.color.green1};
  display: grid;
  justify-content: center;
  align-content: center;

  &:disabled {
    background-color: ${props => props.theme.color.black1}08;
    cursor: auto;
    fill: ${props => props.theme.color.black1}4C;
  }
`;

const ButtonLeft = styled(Button)`
  & svg {
    transform: rotate(-90deg);
  }
`;

const ButtonRight = styled(Button)`
  & svg {
    transform: rotate(90deg);
  }
`;

interface ClientType {
    logo: string;
    description: string;
};

const Cards = (props: {clients: ClientType[]}) => {

    const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
    const [scrollbarWidth, setScrollbarWidth] = useState(100);
    const [scrollbarLeft, setScrollbarLeft] = useState(0);
    const [containerLeft, setContainerLeft] = useState(0);

    const scroller = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        let scroller_current = scroller.current as any;
        let container_current = container.current as any;
        if (scroller_current && container_current) {
            let k_ = scroller_current.clientWidth / container_current.clientWidth;
            if (k_ > 1) {
                setScrollbarWidth(100);
                setScrollbarLeft(0);
                setLeftButtonDisabled(true);
                setRightButtonDisabled(true);
                setContainerLeft(0);
                return;
            }
            setScrollbarWidth(k_ * 100);
            let scrollBarLeft_ = containerLeft / container_current.clientWidth * -100;
            setScrollbarLeft(scrollBarLeft_);
            if (scrollBarLeft_ == 0) {
                setLeftButtonDisabled(true);
            }
            else {
                setLeftButtonDisabled(false);
            }
            if (scrollBarLeft_ + k_ * 100 == 100) {
                setRightButtonDisabled(true);
            }
            else {
                setRightButtonDisabled(false);
            }
        }
    }, [scroller, container, containerLeft]);

    const scroll = (value: number) => {
        let scroller_current = scroller.current as any;
        let container_current = container.current as any;
        let newValue = containerLeft - value * 239;
        if (newValue >= 0) {
            newValue = 0;
        }
        let maxLeft = container_current.clientWidth - scroller_current.clientWidth;
        if (newValue <= -1 * maxLeft) {
            newValue = -1 * maxLeft;
        }
        setContainerLeft(newValue);
    }

    return (
        <CardsStyle>
            <CardsScroller ref={scroller}>
                <CardsContainer ref={container} left={containerLeft}>
                    {props.clients.map((client, i) =>
                        <Card key={i} logo={client.logo} description={client.description} />)}
                </CardsContainer>
                <Overflow />
            </CardsScroller>
            <ScrollBar width={scrollbarWidth} left={scrollbarLeft}>
                <div />
            </ScrollBar>
            <Buttons>
                <ButtonLeft disabled={leftButtonDisabled} onClick={() => scroll(-1)}>
                    {SvgIcons.arrow('inherit')}
                </ButtonLeft>
                <ButtonRight disabled={rightButtonDisabled} onClick={() => scroll(1)}>
                    {SvgIcons.arrow('inherit')}
                </ButtonRight>
            </Buttons>
        </CardsStyle>
    );
};

export default Cards;