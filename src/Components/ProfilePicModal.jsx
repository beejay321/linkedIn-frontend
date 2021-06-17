import '../JumboProfile.css';
import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class ProfilePicModal extends Component {
  state = {
    post: '',
    show: false,
  };

  fileInput = React.createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture', this.fileInput.current.files[0]);

    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/${this.props.userId}/picture`,
        {
          method: 'POST',
          body: formData,
          headers: {},
        }
      );
      if (response.ok) {
      }
    } catch (error) {
      console.log(error, 'couldnt post image');
    }
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    console.log('ref -', this.fileInput);
    return (
      <div>
        <i
          onClick={this.onClickButton}
          className="bi bi-plus-circle-dotted addPic"
        ></i>

        <Modal show={this.state.openModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Photo</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <div id="selectimages">
                <Form.Group>
                  <Form.Control type="file" ref={this.fileInput} />
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer className=" addpostfooterbtn-section d-flex justify-content-between ">
              <div>
                <Button type="submit" variant="primary">
                  Done
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ProfilePicModal;
