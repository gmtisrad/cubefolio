import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import { ThemeProvider } from "./client/context/ThemeContext";

const AppComponent: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<AppComponent />, document.getElementById("root"));
