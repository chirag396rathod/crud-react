import React, { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [users, setUser] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const handledelete = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  }

  useEffect(() => { 
    loadUsers();
  }, []);

  return (
    <Container className="mt-5  ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/home/view/${user.id}`} className="btn btn-outline-primary mx-2">View</Link>
                <Link to={`/home/edit/${user.id}`} className="btn btn-outline-warning mx-2">Edit</Link>
                <Link to="" className="btn btn-danger mx-2" onClick={() => handledelete(user.id)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
