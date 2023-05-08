import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64575bfd1a4c152cf9801638.mockapi.io/crud-yt/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="pt-80">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="mb-3 text-center">Update Operation</h1>
          <div className="col-xl-8">
            <form>
              <div className="mb-3 w-100">
                <label className="form-label">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3 w-100">
                <label className="form-label">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="form-control"
                  required
                />
              </div>
              <button
                onClick={handleUpdate}
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

export default Update;
