import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    /* padding: 0 8rem; */

    overflow: overlay;

    ::-webkit-scrollbar {
    width: 0.8rem;
    background-color: transparent;
    opacity: 0.8;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: transparent;
      border: 1px solid lightgray;
    }

    ::-webkit-scrollbar-button {
      background-color: transparent;
    }
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    /* font-size: 1.6rem; */
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;