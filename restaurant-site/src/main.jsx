import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* GitHub Pages için en sorunsuz yöntem: HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
