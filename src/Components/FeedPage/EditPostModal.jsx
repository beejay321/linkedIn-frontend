// import React from "react";
import React, { Component } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import "../../CardProfile.css";

class EditPostModal extends Component {
  state = {
    show: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };
  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <>
        <span variant="outline" size="md" className="text-muted " onClick={this.onClickButton}>
          <i className="bi bi-pencil-square"></i>
        </span>

        <Modal show={this.state.openModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create a post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                id="text"
                // value={props.text}
                onChange={this.props.handleChange}
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Body className="d-flex justify-content-between ">
            <div className="addpostfooterbtn-section d-flex justify-content-between ">
              <Button className="addpostfooterbtn mx-1">
                <div id="selectimages">
                  <form enctype="multipart/form-data" method="post" name="fileinfo">
                    <input id="post-file" type="file" name="file" onChange={this.props.selectImage} required />
                    <label for="post-file">
                      <Row>
                        <Col>
                          <i className="bi bi-card-image"></i>
                        </Col>
                      </Row>
                    </label>
                  </form>
                </div>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-camera-video-fill"></i>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-calendar-event"></i>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-blockquote-right"></i>
                  </Col>
                </Row>
              </Button>
            </div>

            <div className="addpostfooterbtn-section d-flex justify-content-between ">
              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-chat-text"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Anyone</span>
                  </Col>
                </Row>
              </Button>
            </div>

            <div>
              <Button onClick={this.props.handleSubmit} type="submit" id="savepostbtn" variant="outline" size="md" className="text-muted ">
                Post
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditPostModal;
