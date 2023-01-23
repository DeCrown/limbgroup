import React from 'react';
import styled from "styled-components";
import {Components} from "../../utils/Images";
import {ButtonIconWithBackground, ButtonMainMin} from "../ui/Buttons";
import ButtonGroup from "../shared/ButtonGroup";
import {useViewport} from "../../utils/ViewportContext";
import ScrollTo from "../../utils/ScrollTo";
import {showFeedback} from "../feedback/ShowFeedback";
import {FacebookLink, InstagramLink} from "../shared/Links";

const FeedbackLineStyle = styled.div`
  width: 750px;
  height: 50px;
  background-image: url("${Components.feedbackLine[0]}");
  position: absolute;
  left: calc(50% - 375px);
  top: -25px;
  
  .mobile & {
    position: relative;
    top: auto;
    left: auto;
    height: 80px;
    background-image: none;
    background: linear-gradient(270deg, ${props => props.theme.color.green4} 0%, ${props => props.theme.color.black1} 100%);
    width: 100%;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${Components.feedbackLine[1]}");
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px 0 50px;
  box-sizing: border-box;
  
  .mobile & {
    padding: 0 50px;
    background-image: none;
    justify-content: unset;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${props => props.theme.color.white1};
`;

const ButtonGroupStyle = styled(ButtonGroup)`
  background: none;
`;

const Button = styled.button`
  border: none;
  background-color: unset;
  height: 50px;
  width: 110px;
  background-image: url("${Components.feedbackLineButton}");
  display: grid;
  position: absolute;
  left: calc(100% - 10px);
  cursor: pointer;
`;

const Link = styled(ButtonIconWithBackground)`
  & svg {
    fill: ${props => props.theme.color.white1};
  }
`;

const FeedbackLine = () => {
    const viewport = useViewport();

    return (
        <FeedbackLineStyle>
            <Background>
                {
                    viewport.device == 'mobile' ? null : <Text>Готовы к запуску проекта? Напишите нам.</Text>
                }
                <ButtonGroupStyle>
                    <ButtonMainMin onClick={showFeedback}>Связаться</ButtonMainMin>
                    <FacebookLink button={Link} />
                    <InstagramLink button={Link} />
                </ButtonGroupStyle>
                {
                    viewport.device == 'mobile' ? null : <Button onClick={() => ScrollTo('header')} />
                }
            </Background>
        </FeedbackLineStyle>
    );
};

export default FeedbackLine;
