import React from 'react';
import styled from "styled-components";
import Content from "../shared/Content";
import ChapterHeader from "../shared/ChapterHeader";
import Cards from "./Cards";
import {useViewport} from "../../utils/ViewportContext";
import ProjectList from "../../utils/constants/Projects";
import Card, {AllProject} from "./Card";
import {ButtonSoftMin} from "../ui/Buttons";
import SvgIcons from "../../utils/SvgIcons";
import Theme from "../../utils/Theme";

const ProjectsStyle = styled(Content)`
  height: 567px;
  padding-bottom: 140px;
  
  .tablet & {
    height: 552px;
    padding-bottom: 150px;
  }

  .mobile & {
    height: auto;
    padding-bottom: 150px;
  }
`;

const ButtonMobile = styled(ButtonSoftMin)`
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  & svg {
    transform: rotate(90deg);
  }
`;

const Projects = () => {
    let viewport = useViewport();
    let rows:any[][] = [];

    if (viewport.device == 'mobile') {
        rows = [ProjectList.slice(0, 5)
            .map((project, j) =>
                <Card key={j} project={project} />
            )];
    }
    else {
        rows = [ProjectList.slice(0, 4)
            .map((project, j) =>
                <Card key={j} project={project} />
            )];
        if (ProjectList.length > 4) {
            rows.push(ProjectList.slice(4, 7).map((project, j) =>
                <Card key={j} project={project} />
            ));
        }
        rows[1].push(<AllProject key={-1} count={rows[1].length}/>);
    }

    return (
        <ProjectsStyle id={'projects'}>
            <ChapterHeader>Наши проекты</ChapterHeader>
            <Cards rows={rows} />
            {
                viewport.device == "mobile" &&
                <ButtonMobile onClick={() => window.location.href = '/projects'}><div>Все проекты</div>{SvgIcons.arrow(Theme.color.green1)}</ButtonMobile>
            }
        </ProjectsStyle>
    );
};

export default Projects;
