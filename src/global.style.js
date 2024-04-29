import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "StratosSkyeng";
    src:
      local("StratosSkyeng"),
      local("StratosSkyeng"),
      url("/fonts/StratosSkyeng.woff2") format("woff2"),
      url("/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  } 

* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

*:before,
*:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}
input[type='search']::-webkit-search-cancel-button {
    display: none;
  }
button, 
svg {
    cursor: pointer;
}
button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

ul li {
    list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #000000;
    background-color: #271a58;   
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: 400;
}
`;

export default GlobalStyle;
