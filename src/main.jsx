import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { worker } from "./mocks/browser";

// Start MSW only in dev
if (import.meta.env.DEV) {
  console.log("MSW WORKER STARTING !!")
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
