import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://64575bfd1a4c152cf9801638.mockapi.io/crud-yt"
      );
      const getData = await res.json();
      setData(getData);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="read-table">
      <div className="container">
        <h1 className="className mb-3 text-center">Create Operation</h1>
        <div className="row">
          <div className="col-xl-8">
            <table className="table">
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
                      <button className="btn btn-success">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
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
