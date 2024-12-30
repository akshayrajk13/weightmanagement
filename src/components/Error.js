import React from "react";
import Nav from "./Nav";
function Error() {
  return (
    <>
      <div className="container-fluid d-flex flex-column vh-100">
        <Nav />
        <div className="d-flex flex-grow-1 align-items-center justify-content-center flex-column text-center">
          <h1 className="display-4 mb-4">Page not found!</h1>
        </div>
      </div>
    </>
  );
}
export default Error;
