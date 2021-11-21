import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { appTheme } from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
