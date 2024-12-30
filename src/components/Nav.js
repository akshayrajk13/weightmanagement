import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";
import axios from "axios";
function Nav() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    if (user) {
      axios.post(
        "https://demo-blog.mashupstack.com/api/logout",
        {},
        {
          headers: { Authorization: "Bearer " + user.token },
        }
      );
      dispatch(removeUser());
      navigate("/login");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" href="/">
        Weightlosser
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {user ? (
            <>
              <li className="nav-item">
                <NavLink
                  to={"/userarea"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  Home
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  Home
                </NavLink>
              </li>
            </>
          )}

          {user ? (
            <>
              <li className="nav-item">
                <NavLink
                  to={"/list"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  List
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={logout}>
                  Log Out
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  to={"/login"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/signup"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/about"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/contact"}
                  className={
                    "nav-link " +
                    ((status) => (status.isActive ? "active" : ""))
                  }
                >
                  Contact
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <button className="btn btn-outline-success" type="submit">
            {user ? `Welcome, ${user.email}!` : "Welcome!"}
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Nav;
