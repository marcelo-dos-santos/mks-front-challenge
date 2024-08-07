import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
