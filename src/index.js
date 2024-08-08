import React from "react";
import ReactDOM from "react-dom/client";
import "./components/App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

reportWebVitals();
