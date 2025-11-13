import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json"; // path is correct for your setup

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
