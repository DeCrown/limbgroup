import React from 'react';
import styled from "styled-components";
import {Components} from "../../utils/Images";
import SvgIcons from "../../utils/SvgIcons";
import Theme from "../../utils/Theme";
import {ProjectType} from "../../utils/constants/Projects";

const CardStyle = styled.div`
  height: 100%;
  display: grid;
  overflow: hidden;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  
  & img {
    min-width: 100%;
    min-height: 100%;
  }
  
  &:hover {
    filter: drop-shadow(0px 3px 12px rgba(0, 0, 0, 0.25));
  }
  
  .mobile & {
    height: 220px;
  }
`;

const Card = (props: {project: ProjectType}) => {
    return (
        <CardStyle onClick={() => window.location.href = '/project/' + props.project.id}>
            <img src={props.project.image}/>
        </CardStyle>
    );
}

const AllProjectStyle = styled(CardStyle)<{count: number}>`
  flex-grow: ${props => props.count < 3 ? 0 : 1};
  //flex-shrink: 0;
  
  .tablet & {
    aspect-ratio: ${props => props.count < 3 ? 1 : 'unset'};
  }
  
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.color.white1};

  display: grid;
  grid-auto-flow: column;
  padding: 0 20px;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  align-items: center;
  white-space: nowrap;
  
  & svg {
    transform: rotate(90deg);
  }
`;

export const AllProject = (props: {count: number}) => {
    return (
        <AllProjectStyle count={props.count} onClick={() => window.location.href = '/projects'}>
            <img src={Components.allProjects} />
            <Button>
                <div>Все проекты</div>
                {SvgIcons.arrow(Theme.color.white1)}
            </Button>
        </AllProjectStyle>
    );
}

export default Card;
