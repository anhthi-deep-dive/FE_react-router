import { createGlobalStyle } from "styled-components";

import Pages from "./pages/Pages";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
  }

  div, a {
    box-sizing: border-box;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Pages />
  </>
);

export default App;
