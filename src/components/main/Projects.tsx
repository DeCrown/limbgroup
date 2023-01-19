import React from 'react';
import styled from "styled-components";
import Content from "../shared/Content";
import ChapterHeader from "../shared/ChapterHeader";
import Cards from "../projects/Cards";

const ProjectsStyle = styled(Content)`
  height: 567px;
  padding-bottom: 140px;
  
  .tablet & {
    height: 552px;
    padding-bottom: 150px;
  }

  .mobile & {
    padding-bottom: 150px;
  }
`;

const Projects = () => {
    return (
        <ProjectsStyle>
            <ChapterHeader>Наши проекты</ChapterHeader>
            <Cards />
        </ProjectsStyle>
    );
};

export default Projects;