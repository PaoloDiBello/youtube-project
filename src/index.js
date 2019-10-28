import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Header, Footer } from "./components/Layouts/index";
import * as Colors from 'material-ui/styles/colors';
import "./index.css";


import { BrowserRouter as Router } from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C8C7C4',
      main: '#C8C7C4',
      dark: '#272727',
      contrastText: '#fff',
    },
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
    <Router>
    <Header />
      <App />
    </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
