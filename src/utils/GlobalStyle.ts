import { createGlobalStyle } from 'styled-components';
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-style: normal;
    line-height: 100%;
    user-select: none;
    overflow-x: hidden;
    background-color: ${Theme.color.white2};
  }
  
  .App.desktop {
    min-width: 1480px;
  }
  .App.tablet {
    min-width: 980px;
    max-width: 1480px;
  }
  .App.mobile {
    max-width: 980px;
  }
  
  p {
    margin: 0 0 20px 0;
  }
`;

export default GlobalStyle;
