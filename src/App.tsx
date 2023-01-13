import React from 'react';
import Theme from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import {ButtonIcon, ButtonMain, ButtonMainMin, ButtonSoft, ButtonSoftMin} from "./components/ui/Buttons";
import Icons from "./utils/Icons";
import Label from "./components/ui/Label";
import Input from "./components/ui/Input";
import Select from "./components/ui/Select";
import {SwitchBlack, SwitchGray, SwitchGreen, SwitchRed, SwitchReverse, SwitchWhite} from "./components/ui/Switches";

function App() {
  return (
      <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <div className="App">
              <ButtonMain>кек</ButtonMain>
              <ButtonMain disabled={'disabled'} className={'aaa'}>кек</ButtonMain>
              <ButtonSoft>кек</ButtonSoft>
              <ButtonMainMin>кек</ButtonMainMin>
              <ButtonSoftMin>кек</ButtonSoftMin>
              <ButtonIcon><img src={Icons.instagram} /></ButtonIcon>
              <Label>хихих</Label>
              <Input />
              <Select />
              <SwitchGray />
              <SwitchRed />
              <SwitchGreen />
              <SwitchBlack />
              <SwitchWhite />
              <SwitchReverse />
          </div>
      </ThemeProvider>
  );
}

export default App;
