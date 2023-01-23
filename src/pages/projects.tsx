import React from 'react';
import Footer from "../components/footer/Footer";
import HeaderMini from "../components/header/HeaderMini";
import styled from "styled-components";
import Content from "../components/shared/Content";
import Cards from "../components/projects/Cards";
import {useViewport} from "../utils/ViewportContext";
import ProjectList from "../utils/constants/Projects";
import Card from "../components/projects/Card";
import {ButtonSoftMin} from "../components/ui/Buttons";
import SvgIcons from "../utils/SvgIcons";
import Theme from "../utils/Theme";

const ButtonBack = styled(ButtonSoftMin)`
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 264px;
  & svg {
    transform: rotate(-90deg);
  }
  
  .mobile & {
    margin-bottom: 90px;
  }
`;

const Projects = () => {
    let viewport = useViewport();
    let rows:any[][] = [];

    if (viewport.device == 'mobile') {
        rows = [ProjectList.map((project, j) =>
            <Card key={j} project={project} />
        )];
    }
    else {
        for (let i = 0; i < ProjectList.length; i+=4) {
            rows.push(ProjectList.slice(i, i + 4).map((project, j) =>
                <Card key={j} project={project} />
            ));
        }
    }

    return (
        <div>
            <HeaderMini text={'Наши проекты'} />
            <Content id={'projects'}>
                <Cards rows={rows} />
                <ButtonBack onClick={() => window.location.href = '/'}><div>На главную</div>{SvgIcons.arrow(Theme.color.green1)}</ButtonBack>
            </Content>
            <Footer />
        </div>
    );
};

export default Projects;
