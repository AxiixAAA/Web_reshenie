import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.global.css";
import "normalize.css";
import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { themeObj } from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={themeObj}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
