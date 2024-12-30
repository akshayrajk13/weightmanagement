import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmpassword)
      newErrors.confirmpassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmpassword,
      };
      axios
        .post("https://demo-blog.mashupstack.com/api/register", newUser)
        .then((response) => {
          setErrorMessage("");
          navigate("/login");
        })
        .catch((error) => {
          if (error.response.data.errors) {
            setErrorMessage(Object.values(error.response.data.errors).join(""));
          } else {
            setErrorMessage("Failed to connect to API");
          }
        });
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center text-dark mt-4 mb-4">Sign Up</h1>
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="Name"
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <small style={{ color: "red" }}>{errors.name}</small>
                    )}
                  </div>
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
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmpassword"
                      name="confirmpassword"
                      value={formData.confirmpassword}
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                    {errors.confirmpassword && (
                      <small style={{ color: "red" }}>
                        {errors.confirmpassword}
                      </small>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
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
export default Signup;
