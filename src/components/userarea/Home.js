import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
import Nav from "../Nav";

function Home() {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/list");
  };

  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <Nav />
      <div className="d-flex flex-grow-1 align-items-center justify-content-center flex-column text-center">
        <h1 className="display-4 mb-4">
          Welcome to Weightlosser, {user.email}!
        </h1>
        <button onClick={goToList} className="btn btn-success btn-lg">
          Go To List
        </button>
      </div>
    </div>
  );
}

export default checkAuth(Home);
