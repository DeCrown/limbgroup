import React, {useEffect} from 'react';
import styled from "styled-components";
import {FlappyBirdScript} from "./FlappyBirdScript";
import {Backgrounds} from "../../utils/Images";

const FlappyBirdStyle = styled.div`
  margin-top: 80px;
  /*height: 774px;
  background-color: ${props => props.theme.color.green1};*/

  text-align: center;
  font-family: 'Press Start 2P', cursive;
  
  .mobile & {
    margin-top: 80px;
    margin-left: -30px;
    margin-right: -30px;
  }

  header {
    margin: 0 auto;
    max-width: 431px;
  }
  h1 {
    background: url("https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png") 0% 340px;
    padding: 1.2rem 0;
    margin: 0;
    white-space: nowrap;
  }
  .score-container {
    display: flex;
    justify-content: space-between;
    padding: 8px 6px;
    background: #5EE270;
  }
  
  #canvas {
    width: 100%;
    max-width: 431px;
  }
`;

const ImgContainer = styled.div`
  
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  
  & > img {
    position: absolute;
    left: -427px;
    z-index: -1;
    bottom: -63px;
    width: 1000px;
    
    .mobile & {
      display: none;
    }
  }
`;

const FlappyBird = () => {

    useEffect(() => {
        FlappyBirdScript();
    }, []);

    return (
        <FlappyBirdStyle>
            <header>
                <h1>Floppy Bird</h1>
                <div className="score-container">
                    <div id="bestScore"></div>
                    <div id="currentScore"></div>
                </div>
            </header>

            <ImgContainer>
                <canvas id="canvas" width="431" height="768" />
                <img src={Backgrounds.relaxZoneBG} />
            </ImgContainer>
        </FlappyBirdStyle>
    );
};

export default FlappyBird;
