import React from "react";
import "./Sidebar.css";
import { Image, Row, Col, Button } from "react-bootstrap";

const SidebarPerson = (props) => {
  return (
    <>
      <Row>
        <Col xs={3}>
          <Image className="sidebar-img" src={props.image} />
        </Col>
        <Col xs={9} className="align-text-bottom">
          <span className="sidebar-person-name">
            {props.name} {props.surname}
          </span>
          <span className="sidebar-span text-muted">{" \u2022 "}</span>
          <span className="sidebar-span text-muted">2nd</span>
          <p className="sidebar-p text-muted">{props.title}</p>
        </Col>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Button
            className="sidebar-btn text-muted mb-3 mt-1"
            variant="outline-dark"
            size="sm"
          >
            Message
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SidebarPerson;
// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
