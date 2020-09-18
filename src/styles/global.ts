import { createGlobalStyle } from 'styled-components';

import lotusBg from '../assets/lotusBg.svg';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #E5E5E5  url(${lotusBg}) no-repeat;
    background-position-y: 160px;
    background-position-x: center;
    background-size: 600px 545px;
    background-attachment: fixed;
    color: #907CB8;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px "Asap", serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
    cursor: pointer;
    outline: 0;
}

a {
  text-decoration: none;
}

/* #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px
} */

`;
