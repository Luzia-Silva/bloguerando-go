import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto,sans-serif;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  li{
      list-style-type: none;
  }
  h1 {
      font-weight: 500;
      padding-top: 1rem;
      font-family: 'Tahoma', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
      color: #718096;
      font-size: 1.1rem;
      margin-top: 2rem;
    }
`;

