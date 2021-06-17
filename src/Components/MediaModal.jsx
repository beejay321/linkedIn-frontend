import React, { Component } from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';

class MediaModal extends Component {
  state = {
    post: null,
    show: false,
  };
  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };
  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  fileSelectedHandler = (event) => {
    this.setState({
      post: event.target.files[0],
    });
  };

  uploadImage = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('post', this.state.post);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.id}`,
        {
          method: 'POST',
          body: formData,
          headers: {
            // Content-Disposition: form-data; name="file"; filename="Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db-jpg.jpeg"
            // Content-Type: image/jpeg

            // "Content-Type": "multipart/form-data; boundary=boundary",
            // "Content-Disposition": form-data; name="description",

            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDliYzRmMDkwNTY0YTAwMTU4OGU3M2YiLCJpYXQiOjE2MjA4MjEyMzMsImV4cCI6MTYyMjAzMDgzM30.SbwSggBFs6g6jZgb3C710s3gG93tcV5Fupko2NkKc-w',
          },
        }
      );

      if (response.ok) {
        alert('your image has been saved');

        this.setState({
          post: '',
        });
      } else {
        alert('something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Button className="addpostfooterbtn mx-1">
          <div id="selectimages">
            <form enctype="multipart/form-data" method="post" name="fileinfo">
              <input
                id="postfile"
                type="file"
                name="file"
                onChange={this.props.selectImage}
                required
              />
              <label for="postfile">
                <Row>
                  <Col>
                    <i className="bi bi-card-image"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Photo</span>
                  </Col>
                </Row>
              </label>
            </form>
          </div>
        </Button>

        <Modal show={this.state.openModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="selectimages">
              <form enctype="multipart/form-data" method="post" name="fileinfo">
                <input
                  type="file"
                  name="file"
                  onChange={this.fileSelectedHandler}
                  required
                />
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer className=" addpostfooterbtn-section d-flex justify-content-between ">
            <div>
              <Button type="submit" variant="primary">
                Back
              </Button>
              <Button
                onClick={this.uploadImage}
                type="submit"
                variant="primary"
              >
                Done
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MediaModal;
