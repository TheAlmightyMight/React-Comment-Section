import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    outline:none;
    border:none;
}

body{
    background-color:hsl(223, 19%, 93%);
    font-family: 'Rubik', sans-serif;
    font-size:16px;
}


svg:hover path {
    fill: hsl(238, 40%, 52%);
  }
`;
