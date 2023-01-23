import React from 'react';
import HeaderMini from "../components/header/HeaderMini";
import SvgIcons from "../utils/SvgIcons";
import Theme from "../utils/Theme";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router-dom";
import Content from "../components/shared/Content";
import styled from "styled-components";
import {ButtonSoftMin} from "../components/ui/Buttons";
import ProjectList from "../utils/constants/Projects";

const ButtonBackStyle = styled(ButtonSoftMin)`
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  & svg {
    transform: rotate(-90deg);
  }
`;

const Container = styled(Content)`
  display: grid;
  grid-gap: 30px;
  grid-auto-flow: column;
  margin-top: 90px;
  margin-bottom: 225px;
  grid-template-columns: 1fr 1fr;
  
  .mobile & {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 90px;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.color.black1};
  
  display: grid;
  grid-template-rows: auto min-content;
`;

const Image = styled.img`
  width: 100%;
`;

const ButtonBack = () => <ButtonBackStyle onClick={() => window.location.href = '/'}>
    <div>На главную</div>
    {SvgIcons.arrow(Theme.color.green1)}
</ButtonBackStyle>;

const Project = () => {

    let { id } = useParams();
    let project = ProjectList.find(project => project.id == id);

    return (
        <div>
            <HeaderMini text={project ? project.title : ''} />
            <Container id={'project'}>
                {
                    project ?
                        <>
                            <Text><div>{project.description}</div><ButtonBack /></Text>
                            <Image src={project.image}></Image>
                        </>
                        :
                        <Text><ButtonBack /></Text>
                }
            </Container>
            <Footer />
        </div>
    );
};

export default Project;
