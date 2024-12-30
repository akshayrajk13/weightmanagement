import React, { useState } from "react";
import Nav from "./Nav";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Validation Success:", formData);
      setFormData({ name: "", email: "", message: "" });
      const modal = new window.bootstrap.Modal(
        document.getElementById("Modal")
      );
      modal.show();
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="modal fade" id="Modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Thank you for reaching out to Weightlosser!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <Nav />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center text-dark mt-4 mb-4">Contact</h1>
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
                      type="email"
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
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <small style={{ color: "red" }}>{errors.message}</small>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
