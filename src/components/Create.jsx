import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(false);
  const navigate = useNavigate();
  const validate = () => {
    return name.length && email.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://64575bfd1a4c152cf9801638.mockapi.io/crud-yt", {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [name, email]);

  return (
    <div className="pt-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="mb-5 d-flex justify-content-between align-items-center">
            <h1 className="text-center">Create Operation</h1>
            <Link to="/read">
              <button className="btn btn-primary">Show Data</button>
            </Link>
          </div>
          <div className="col">
            <form>
              <div className="mb-3 w-100">
                <label className="form-label">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  value={name}
                />
              </div>
              <div className="mb-3 w-100">
                <label className="form-label">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  value={email}
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
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
