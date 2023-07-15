import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    align-items: center;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Roboto, Helvetica, Arial, sans-serif;
    transition: background .3s ease, color .3s ease;
}
`;