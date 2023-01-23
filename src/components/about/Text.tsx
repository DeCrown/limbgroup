import React from 'react';
import styled from "styled-components";
import {ButtonIconWithBackground, ButtonMain} from "../ui/Buttons";
import ChapterHeader from "../shared/ChapterHeader";
import ChapterText from "../shared/ChapterText";
import ButtonGroup from "../shared/ButtonGroup";
import Slider from "../shared/Slider";
import AboutUsList from "../../utils/constants/AboutUs";
import {useViewport} from "../../utils/ViewportContext";
import {showFeedback} from "../feedback/ShowFeedback";
import {FacebookLink, InstagramLink} from "../shared/Links";

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

const Link = styled(ButtonIconWithBackground)`
  & svg {
    fill: ${props => props.theme.color.green1};
  }
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
                <FacebookLink button={Link} />
                <InstagramLink button={Link} />
            </ButtonGroupStyle>
        </TextStyle>
    );
};

export default Text;
