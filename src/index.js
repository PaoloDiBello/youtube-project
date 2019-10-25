import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Header, Footer } from "./components/Layouts/index";
import * as Colors from 'material-ui/styles/colors';
import "./index.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#FF0000'
      },
      background: {
        default: "#2A2A2A"
      }
},
  appBar: {
    height: "3px"
  }
}

);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <Header />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
