import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BackButton = ({className},props) => {
  let history = useNavigate();
  const handleBack = () => {
    history('/home')
  };
  return (
    <React.Fragment>
      <Button className={className} onClick={() => handleBack()}>Go Back</Button>
    </React.Fragment>
  );
};

export default BackButton;
