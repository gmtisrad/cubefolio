import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const AppComponent: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<AppComponent />, document.getElementById("root"));
