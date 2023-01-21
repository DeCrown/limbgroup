import React, {useState} from 'react';
import Header from "../components/main/Header";
import styled from "styled-components";
import About from "../components/main/About";
import CountPrice from "../components/main/CountPrice";
import Clients from "../components/main/Clients";
import Projects from "../components/main/Projects";
import RelaxZone from "../components/main/RelaxZone";
import Footer from "../components/main/Footer";
import {useViewport} from "../utils/ViewportContext";
import Feedback from "../components/main/Feedback";
import {setFunc} from "../components/feedback/ShowFeedback";

const MainStyle = styled.div`
  background-color: ${props => props.theme.color.white2};
`;

const Main = () => {
    const viewport = useViewport();
    const [feedback, setFeedback] = useState(false);
    setFunc(setFeedback);

    return (
        <MainStyle className={viewport.device}>
            <Header />
            <About />
            <CountPrice />
            <Clients />
            <Projects />
            <RelaxZone />
            <Footer />
            {
                feedback && <Feedback />
            }
        </MainStyle>
    );
};

export default Main;