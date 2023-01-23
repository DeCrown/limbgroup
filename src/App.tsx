import React, {useState} from 'react';
import Theme from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import Main from "./pages/main";
import {useViewport, ViewportProvider} from "./utils/ViewportContext";
import {setFunc} from "./components/feedback/ShowFeedback";
import Feedback from "./components/feedback/Feedback";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Projects from "./pages/projects";
import Project from "./pages/project";

const DeviceToClass = (props: {children: any}) => {
    const viewport = useViewport();

    return (<div className={"App " + viewport.device}>{props.children}</div>);
}

function App() {
    const [feedback, setFeedback] = useState(false);
    setFunc(setFeedback);

    return (
        <ThemeProvider theme={Theme}>
            <ViewportProvider>
                <GlobalStyle />
                <DeviceToClass>
                    <BrowserRouter>
                        <Routes>
                            <Route path={'/'} element={<Main />} />
                            <Route path={'/projects'} element={<Projects />} />
                            <Route path={'/project/:id'} element={<Project />} />
                        </Routes>
                    </BrowserRouter>
                    {
                        feedback && <Feedback />
                    }
                </DeviceToClass>
            </ViewportProvider>
        </ThemeProvider>
    );
}

export default App;
