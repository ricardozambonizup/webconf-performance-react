  
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        min-height: calc(100vh);
        font-family: 'Montserrat', sans-serif;
    }
`;