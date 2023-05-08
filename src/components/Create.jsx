import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://64575bfd1a4c152cf9801638.mockapi.io/crud-yt", {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div className="create-form">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="mb-3 text-center">Create Operation</h1>
          <div className="col-xl-8">
            <form>
              <div className="mb-3 w-100">
                <label className="form-label">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3 w-100">
                <label className="form-label">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
