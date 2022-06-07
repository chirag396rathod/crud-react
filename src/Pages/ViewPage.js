import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

const ViewPage = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username } = user;
  const { id } = useParams();

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <React.Fragment>
      <Card border="secondary" className="mx-auto mt-5" style={{ width: "25rem" ,marginTop: "20rem"}}>
        <Card.Header>
          Welcome your profile, <span className="fw-bold">{name}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            UserName: <span className="fw-bold">{username}</span>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ViewPage;
