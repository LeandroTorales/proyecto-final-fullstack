import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Exo 2', sans-serif;
  }
  body{
  background: -webkit-linear-gradient(to right, #003775, #4d0d46);
  background: linear-gradient(to right, #003775, #4d0d46);
  background-repeat: no-repeat;
  color: white;
  }
  svg{
    color: black;
  }
  html{
    scroll-behavior: smooth;
  }

`;
