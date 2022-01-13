import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      fireDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact deleted successfully");
        }
      });
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <tbody>
          <tr>
            <th
              style={{
                backgroundColor: "#009879",
                textAlign: "center",
                color: "white",
              }}
            >
              No.
            </th>
            <th
              style={{
                backgroundColor: "#009879",
                textAlign: "center",
                color: "white",
              }}
            >
              Name
            </th>
            <th
              style={{
                backgroundColor: "#009879",
                textAlign: "center",
                color: "white",
              }}
            >
              Email
            </th>
            <th
              style={{
                backgroundColor: "#009879",
                textAlign: "center",
                color: "white",
              }}
            >
              Contact
            </th>
            <th
              style={{
                backgroundColor: "#009879",
                textAlign: "center",
                color: "white",
              }}
            >
              Action
            </th>
          </tr>
        </tbody>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
