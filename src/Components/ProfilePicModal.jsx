import "../JumboProfile.css"
import React, { Component, createRef } from "react"
import { Modal, Button, Form } from "react-bootstrap"

class ProfilePicModal extends Component {
  state = {
    post: "",
    show: false,
  }

  fileInput = React.createRef()

  handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("profile", this.fileInput.current.files[0])
    console.log(formData)
    console.log("user is", this.props.userId)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      )
      if (response.ok) {
        console.log("image succesfully posted")
      }
    } catch (error) {
      console.log(error, "couldnt post image")
    }
  }

  onClickButton = (e) => {
    e.preventDefault()
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  //   uploadImage = async (e) => {
  //     e.preventDefault()
  //     let formData = new FormData()
  //     // formData.append("file", myFileInput.files[0]);

  //     try {
  //       let response = await fetch(
  //         `https://striveschool-api.herokuapp.com/api/posts/${this.props.id}`,
  //         {
  //           method: "POST",
  //           body: formData,
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDliYzRmMDkwNTY0YTAwMTU4OGU3M2YiLCJpYXQiOjE2MjA4MjEyMzMsImV4cCI6MTYyMjAzMDgzM30.SbwSggBFs6g6jZgb3C710s3gG93tcV5Fupko2NkKc-w",
  //           },
  //         }
  //       )

  //       if (response.ok) {
  //         alert("your image has been saved")
  //         this.setState({
  //           text: "",
  //         })
  //       } else {
  //         alert("something went wrong")
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  render() {
    console.log("ref -", this.fileInput)
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
    )
  }
}

export default ProfilePicModal
