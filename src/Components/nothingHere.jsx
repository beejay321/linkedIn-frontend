import React from "react";
import { Card } from "react-bootstrap";

const nothingHere = () => {
  return (
    <div className="mt-5">
      <Card style={{ width: "30rem", border: "none" }} className="mx-auto">
        <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/web-hosting-7/66/61-512.png" />
      </Card>
    </div>
  );
};

export default nothingHere;
