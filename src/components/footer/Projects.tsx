import React from 'react';
import FooterHeader from "../shared/FooterHeader";
import styled from "styled-components";
import Card from "../projects/Card";
import ProjectList from "../../utils/constants/Projects";

const ProjectListStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  margin-top: 20px;
  aspect-ratio: 3;
  
  & img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Projects = () => {
    return (
        <div>
            <FooterHeader>Последние проекты</FooterHeader>
            <ProjectListStyle>
                {
                    ProjectList.slice(0, 3).map((project, i) => <Card key={i} project={project} />)
                }
            </ProjectListStyle>
        </div>
    );
};

export default Projects;
