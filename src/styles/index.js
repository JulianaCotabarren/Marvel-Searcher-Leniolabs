import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
    transition: background .3s ease, color .3s ease;
}
`;
