import React from "react";
import Nav from "./Nav";
function About() {
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center text-dark mt-4 mb-4">About Us</h1>
            <div className="card mb-4">
              <div className="card-body">
                <p>
                  Welcome to Weightlosser, your dedicated companion for
                  achieving and maintaining your weight loss goals. At
                  Weightlosser, we understand that tracking your weight is not
                  just about numbers—it&apos;s about progress, persistence, and
                  self-care. Our platform is designed to empower you with the
                  tools you need to stay accountable, informed, and motivated
                  throughout your fitness journey.
                </p>
              </div>
            </div>
            <h2 className="text-center text-secondary mb-4">Why Choose Us?</h2>
            <ul className="list-group mb-4">
              <li className="list-group-item">
                <strong>Simplicity at Its Best:</strong> With an intuitive
                interface, logging your daily weight becomes a seamless habit.
              </li>
              <li className="list-group-item">
                <strong>Personalized Tracking:</strong> Keep a detailed log of
                your weight changes and visualize your progress over time.
              </li>
              <li className="list-group-item">
                <strong>Goal-Oriented Features:</strong> Identify trends,
                calculate weight loss between specific dates, and stay on top of
                your goals.
              </li>
              <li className="list-group-item">
                <strong>Your Privacy, Our Priority:</strong> We prioritize the
                security of your personal data to ensure you have peace of mind
                while using our services.
              </li>
            </ul>
            <div className="card">
              <div className="card-body">
                <p>
                  Whether you&apos;re just beginning your weight loss journey or
                  maintaining your hard-earned success, Weightlosser is here to
                  support you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
