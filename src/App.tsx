import React from 'react';
import Theme from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import Main from "./pages/main";
import {ViewportProvider} from "./utils/ViewportContext";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <ViewportProvider>
                <GlobalStyle />
                <div className={"App"}>
                    <Main />
                </div>
            </ViewportProvider>
        </ThemeProvider>
    );
}

export default App;
