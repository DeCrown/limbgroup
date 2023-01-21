import React from 'react';
import styled from "styled-components";
import {ButtonIcon, ButtonIconWithBackground, ButtonMain} from "../ui/Buttons";
import SvgIcons from "../../utils/SvgIcons";
import Theme from "../../utils/Theme";
import ChapterHeader from "../shared/ChapterHeader";
import ChapterText from "../shared/ChapterText";
import ButtonGroup from "../shared/ButtonGroup";
import Slider from "../shared/Slider";
import AboutUsList from "../../utils/constants/AboutUs";
import {useViewport} from "../../utils/ViewportContext";
import {showFeedback} from "../feedback/ShowFeedback";

const TextStyle = styled.div`
  justify-self: end;
  max-width: 700px;
  
  .mobile & {
    justify-self: auto;
    max-width: unset;
  }
`;

const TextHeader = styled(ChapterHeader)`
  margin-bottom: 50px;
`;

const TextBody = styled(ChapterText)`
  margin-bottom: 70px;
  
  .mobile & {
    margin-bottom: 40px;
  }
`;

const ButtonGroupStyle = styled(ButtonGroup)`
  margin-top: 25px;
`;

const Text = () => {
    const viewport = useViewport();

    return (
        <TextStyle>
            <TextHeader>О нас</TextHeader>
            <TextBody>
                Помогаем полностью вывести ваш бизнес в Digital пространство.
                <br/><br/>
                Создание сайтов, приложений и социальных сетей.
                Мы так же предлагаем дальнейшее сотрудничество, помогая нашим клиентам с обслуживанием созданных продуктов.
            </TextBody>
            {
                viewport.device == 'mobile' && <Slider slides={AboutUsList} />
            }
            <ButtonGroupStyle>
                <ButtonMain onClick={showFeedback}>Связаться</ButtonMain>
                <ButtonIcon>{SvgIcons.facebook(Theme.color.green1)}</ButtonIcon>
                <ButtonIcon>{SvgIcons.instagram(Theme.color.green1)}</ButtonIcon>
            </ButtonGroupStyle>
        </TextStyle>
    );
};

export default Text;