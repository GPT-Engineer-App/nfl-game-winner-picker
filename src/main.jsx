import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0d253f",
    800: "#1b3a57",
    700: "#2a4f6f",
  },
  teal: {
    500: "#008080",
    600: "#007373",
    700: "#006666",
  },
  gray: {
    50: "#f0f0f0",
    700: "#3a3a3a",
  },
  blue: {
    500: "#00509e",
    600: "#004080",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);