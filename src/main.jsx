import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/State/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provider ทำให้ redux store เข้าถึงได้ทุก component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
