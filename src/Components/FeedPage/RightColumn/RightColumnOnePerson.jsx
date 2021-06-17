import React from "react";
import "../../Sidebar/Sidebar.css";
import { Image, Row, Col, Button, Card } from "react-bootstrap";
import "../Post.css";
import { Link } from "react-router-dom";

const RightColumnOnePerson = (props) => {
  return (
    <>
      <Row>
        <Col xs={3}>
          <Image className="sidebar-img" src={props.image} />
        </Col>
        <Col xs={9} className="align-text-bottom">
          <Link to={`/user/${props.id}`} className="sidebar-person-name">
            {props.name} {props.surname}
          </Link>
          <span className="sidebar-span text-muted">{" \u2022 "}</span>
          <span className="sidebar-span text-muted">2nd</span>
          <p className="sidebar-p text-muted">{props.title}</p>
        </Col>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Button id="RightColumn-follow-btn" className="sidebar-btn text-muted mb-3 mt-1" variant="outline-dark" size="sm">
            <span href="#" class="text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16" id="plus-icon">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
              </svg>
              Follow
            </span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default RightColumnOnePerson;
