import React, {useEffect} from 'react';
import Theme from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import Main from "./pages/main";
import {DEVICE, initDevice} from "./utils/Device";

function App() {

    initDevice();

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <div className={"App " + DEVICE}>
                <Main />
            </div>
        </ThemeProvider>
    );
}

export default App;
