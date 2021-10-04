import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700&display=swap');

    *,*::before,*::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Atkinson Hyperlegible', sans-serif;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default GlobalStyles