import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { Preview } from "./pages/Preview";
import { Details } from "./pages/Details";
import { Profile } from "./pages/Profile";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
