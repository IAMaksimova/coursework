import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box; //вспомнить бокс сайзинг
    font-family: 'Montserrat', sans-serif
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif, 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    line-height: 1.2;

  }

  ul {
    list-style: none;
    width: 100%;
  }

  a {
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  section{
    height: 100vh;
    background-color: #f7f2f0;
  }


`