import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import checkGuest from "./components/auth/checkGuest";
function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="display-1 text-center">Welcome to Weightlosser!</h1>
      </div>
    </div>
  );
}
export default checkGuest(App);
