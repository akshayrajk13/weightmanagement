import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AutoLogin from "./components/auth/AutoLogin";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./components/Router";
import reportWebVitals from "./reportWebVitals";
import { setUserFromLocalStorage } from "./store/authSlice";

store.dispatch(setUserFromLocalStorage());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AutoLogin>
        <RouterProvider router={router} />
      </AutoLogin>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
