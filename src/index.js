import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Header } from "./components/Layouts/index";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#C8C7C4",
      main: "#C8C7C4",
      dark: "#272727",
      contrastText: "#fff"
    },
    secondary: {
      main: "#FF0000",
      text: "#fff"
    },
    background: {
      default: "#221f20"
    }
  },
  appBar: {
    height: "3px"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header>
          <Profiler
            id="App"
            onRender={(id, phase, actualDuration) => {
              console.log({
                id,
                phase,
                actualDuration
              });
            }}
          >
            <App />
          </Profiler>
        </Header>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
