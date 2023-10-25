import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/Elements/ScrollToTop.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
