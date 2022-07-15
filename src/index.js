import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {ThemeProvider } from "./Context"

ReactDOM.render(
  <ThemeProvider>
      <Router>
        <App />
    </Router>
  </ThemeProvider>,
    document.getElementById("root")
);
