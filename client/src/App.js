import React from "react";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import "typeface-roboto";

import Router from "./router";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
