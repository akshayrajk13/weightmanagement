import React from "react";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
import Nav from "../Nav";
import Crud from "./Crud";
function Home() {
  const user = useSelector((store) => store.auth.user);
  return (
    <div className="container-fluid">
      <Nav />
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-4">
        <h1 className="heading-1 text-center">
          Welcome to Weightlosser, {user.email}!
        </h1>
        <Crud />
      </div>
    </div>
  );
}
export default checkAuth(Home);
