import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }
    a{
        all: unset;
    }
`;