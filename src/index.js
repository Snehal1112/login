import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#121212",
  primary: "#BB86FC",
  secondary: "#30DAc5",
  error: "#CF6679"
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
