import { Card, Image, Form, Button, Row, Col } from "react-bootstrap";
import "../CardProfile.css";
import AddPostModal from "./AddPostModal";
import MediaModal from "./MediaModal";
import ModalForm from "./MyModal";
import React from "react";

class AddPost extends React.Component {
  state = {
    text: "",
    post: undefined,
  };

  submitPost = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.text),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      );

      if (response.ok) {
        if (this.state.post !== undefined) {
          const data = await response.json();
          const id = data._id;
          console.log("this is the post id", id);
          let newResponse = await fetch(
            "https://striveschool-api.herokuapp.com/api/posts/" + id,
            {
              method: "POST",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
              },
              body: this.state.post,
            }
          );
          if (newResponse.ok) {
            console.log("File uploaded successfully");
          }
        } else {
          console.log("File was not uploaded!");
        }
      }
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  };

  selectImage = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("post", file);
    console.log(this.state.post);
    console.log(formData);
    this.setState({
      post: formData,
    });
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      text: { [id]: e.target.value },
    });
  };

  render() {
    return (
      <>
        <Card>
          <Card.Body className="d-flex ">
            <Image
              src={this.props.image}
              height="50"
              width="50"
              roundedCircle
            />

            {/* <Button variant="secondary" size="md" block>
            Start a Post
          </Button> */}
            <AddPostModal
              handleChange={this.handleChange}
              submitPost={this.submitPost}
              text={this.state.text}
              id={this.state.post}
              selectImage={this.selectImage}
            />
          </Card.Body>
          <Card.Body>
            <div className="addpostfooterbtn-section d-flex justify-content-between ">
              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-card-image"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Photo</span>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-camera-video-fill"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Video</span>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-calendar-event"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Event</span>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-blockquote-right"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Article</span>
                  </Col>
                </Row>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AddPost;
