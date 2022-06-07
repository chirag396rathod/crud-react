import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container } from "react-bootstrap";

const Adduser = () => {
  let history = useNavigate();
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, phone, website, email } = user;

  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const SubmitHendal = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history('/home')
  };

  return (
    <Container className="mt-5">
      <Form className="col-md-6 mx-auto" onSubmit={SubmitHendal}>
      <h1 className="my-5 text-center">Add user</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="User phone"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter website</Form.Label>
          <Form.Control
            type="text"
            placeholder="User website"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
     
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default Adduser;