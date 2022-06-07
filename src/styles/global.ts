import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --orange: #FF9B25;
    --grafite: #202020;
    --cinza: rgb(53, 53, 53, 0.2);
    --black: #181818;
  }
  ::-webkit-scrollbar { 
    display: none; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--orange);
  }
  body,
  input,
  button,
  textarea {
    font-family: "Montserrat", sans-serif;
  }
`;