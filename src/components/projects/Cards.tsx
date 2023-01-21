import React from 'react';
import styled from "styled-components";
import ProjectList from "../../utils/constants/Projects";
import {Components} from "../../utils/Images";
import SvgIcons from "../../utils/SvgIcons";
import Theme from "../../utils/Theme";
import {useViewport} from "../../utils/ViewportContext";
import {ButtonSoftMin} from "../ui/Buttons";

const CardsStyle = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 60px;
  height: 470px;

  .tablet & {
    height: 454px;
    grid-gap: 14px;
  }

  .mobile & {
    height: auto;
  }
`;

const CardsRowStyle = styled.div`
  height: 220px;
  //background-color: ${props => props.theme.color.green1};
  display: flex;
  grid-gap: 30px;

  .tablet & {
    grid-gap: 16px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
  
  .mobile & {
    height: auto;
    flex-direction: column;
  }
`;

const Card = styled.div`
  height: 220px;
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
`;

const AllProjectStyle = styled(Card)<{count: number}>`
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

const ButtonMobile = styled(ButtonSoftMin)`
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  & svg {
    transform: rotate(90deg);
  }
`;

const AllProject = (props: {count: number}) => {
    return (
        <AllProjectStyle count={props.count}>
            <img src={Components.allProjects} />
            <Button>
                <div>Все проекты</div>
                {SvgIcons.arrow(Theme.color.white1)}
            </Button>
        </AllProjectStyle>
    );
}

const Cards = () => {
    let viewport = useViewport();
    let rows:any[][] = [];

    if (viewport.device == 'mobile') {
        rows = [ProjectList.slice(0, 5)
            .map((project, j) =>
                <Card key={j}><img src={project.image}/></Card>
            )];
    }
    else {
        rows = [ProjectList.slice(0, 4)
            .map((project, j) =>
                <Card key={j}><img src={project.image}/></Card>
            )];
        if (ProjectList.length > 4) {
            rows.push(ProjectList.slice(4, 7).map((project, j) =>
                <Card key={j}><img src={project.image}/></Card>
            ));
        }
        rows[1].push(<AllProject key={-1} count={rows[1].length}/>);
    }

    return (
        <CardsStyle>
            {
                rows.map((row, i) =>
                    <CardsRowStyle key={i}>
                        {
                            row
                        }
                    </CardsRowStyle>
                )
            }
            <ButtonMobile><div>Все проекты</div>{SvgIcons.arrow(Theme.color.green1)}</ButtonMobile>
        </CardsStyle>
    );
};

export default Cards;