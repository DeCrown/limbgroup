import React, {useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import SvgIcons from "../../utils/SvgIcons";

interface SlideType {
    logo: string;
    description: any;
};

const Points = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-auto-flow: column;
  padding: 20px 0;
`;

const Point = styled.div<{active: boolean}>`
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background-color: ${props => props.active ? props.theme.color.green1 : props.theme.color.green3};
`;

const SliderMain = styled.div`
  display: grid;
  grid-template-columns: 24px auto 24px;
`;

const Button = styled.button<{active: boolean}>`
  display: grid;
  align-content: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: unset;
  
  & svg {
    fill: ${props => props.active ? props.theme.color.green1 : props.theme.color.black1 + '40'};
  }
`;

const ButtonLeft = styled(Button)`
  margin-left: -30px;
  padding-left: 30px;
  
  & svg {
    transform: rotate(-90deg);
  }
`;

const ButtonRight = styled(Button)`
  margin-right: -30px;
  padding-right: 30px;
  
  & svg {
    transform: rotate(90deg);
  }
`;

const SlidesScroll = styled.div`
  overflow: hidden;
  height: 260px;
  position: relative;
`;

const Slider = (props: {slides: SlideType[]}) => {
    const [activeI, setActiveI] = useState(0);
    const scroll = (value: number) => {
        let newValue = activeI + value;
        if (newValue >= 0 && newValue < props.slides.length) {
            setActiveI(newValue)
        }
    }

    return (
        <div>
            <SliderMain>
                <ButtonLeft active={activeI != 0} onClick={() => scroll(-1)}>
                    {SvgIcons.arrow('inherit')}
                </ButtonLeft>
                <SlidesScroll>
                    {props.slides.map((slide, i) =>
                        <Card slider={{i: i, active_i: activeI}} key={i} description={slide.description} logo={slide.logo} />)}
                </SlidesScroll>
                <ButtonRight active={activeI < props.slides.length - 1} onClick={() => scroll(1)}>
                    {SvgIcons.arrow('inherit')}
                </ButtonRight>
            </SliderMain>
            <Points>
                {props.slides.map((slide, i) => <Point key={i} active={i == activeI} />)}
            </Points>
        </div>
    );
};

export default Slider;