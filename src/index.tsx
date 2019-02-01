import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grommet } from "grommet";
import App from "./App";
import styled from "styled-components";

const theme = {
  global: {
    colors: {
      "light-2": "#f5f5f5",
      main: "rgb(13%, 46.8%, 76.1%)",
      text: {
        light: "rgba(0, 0, 0, 0.87)"
      }
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const Index = () => (
  <Grommet theme={theme}>
    <App />
  </Grommet>
);

ReactDOM.render(<Index />, document.getElementById("root"));
