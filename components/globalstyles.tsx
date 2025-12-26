import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Times New Roman, serif;
    background-color: #fff;
    color: #000;
  }

  a {
    color: #0066CC;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Times New Roman, serif;
    color: #000;
  }
`

export default GlobalStyle
