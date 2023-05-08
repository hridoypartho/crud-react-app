import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://64575bfd1a4c152cf9801638.mockapi.io/crud-yt")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64575bfd1a4c152cf9801638.mockapi.io/crud-yt/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-80">
      <div className="container">
        <div className="form-check form-switch text-center">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => {
              if (tableDark === "table-dark") setTableDark("");
              else setTableDark("table-dark");
            }}
          />
        </div>
        <div className="mb-5 d-flex justify-content-between align-items-center">
          <h1 className="text-center">Create Operation</h1>
          <Link to="/">
            <button className="btn btn-warning">Create</button>
          </Link>
        </div>
        <div className="row">
          <div className="col">
            <table className={`table ${tableDark}`}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to="/update">
                        <button
                          onClick={() =>
                            setToLocalStorage(item.id, item.name, item.email)
                          }
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
