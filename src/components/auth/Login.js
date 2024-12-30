import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../../store/authSlice";
import Nav from "../Nav";
import checkGuest from "./checkGuest";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const newErrors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("https://demo-blog.mashupstack.com/api/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          setErrorMessage("");
          const user = {
            email: formData.email,
            token: response.data.token,
          };
          console.log(response);
          dispatch(setUser(user));
          navigate("/userarea");
        })
        .catch((error) => {
          if (error.response.data.errors) {
            setErrorMessage(Object.values(error.response.data.errors).join(""));
          } else if (error.response.data.message) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage(
              "Failed to login user. Please contact administrator"
            );
          }
        });
      setFormData({ email: "", password: "" });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center text-dark mt-4 mb-4">Log In</h1>
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="E-mail"
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small style={{ color: "red" }}>{errors.email}</small>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <small style={{ color: "red" }}>{errors.password}</small>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Log In
                  </button>
                </form>
                <small style={{ color: "red" }}>
                  {errorMessage && <p>{errorMessage}</p>}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default checkGuest(Login);
