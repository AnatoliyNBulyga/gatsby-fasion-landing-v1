import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    background: #D8DBE2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  ul {
    list-style: none;
  }
  
`