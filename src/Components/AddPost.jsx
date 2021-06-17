import { Card, Image, Button, Row, Col } from 'react-bootstrap';
import '../CardProfile.css';
import AddPostModal from './AddPostModal';

import React from 'react';

class AddPost extends React.Component {
  state = {
    new: {
      text: '',
      user: '60c9be8b6f63455fa0ee7849',
    },
    cover: undefined,
  };

  submitPost = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        'https://api-linkedin-api.herokuapp.com/posts',
        {
          method: 'POST',
          body: JSON.stringify(this.state.new),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert('Sucesfully posted, you can now close the window :)');
        if (this.state.cover !== undefined) {
          const data = await response.json();
          const id = data._id;

          let newResponse = await fetch(
            `https://api-linkedin-api.herokuapp.com/posts/${id}/upload`,
            {
              method: 'POST',

              body: this.state.cover,
            }
          );
          if (newResponse.ok) {
            alert('Sucesfully posted, you can now close the window :)');
          }
        } else {
          console.log('File was not uploaded!');
        }
      }
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  };

  selectImage = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    let formData = new FormData();
    formData.append('cover', file);

    this.setState({
      ...this.state,
      cover: formData,
    });
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      ...this.state,
      new: { ...this.state.new, [id]: e.target.value },
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
              text={this.state.new.text}
              id={this.state.new}
              selectImage={this.selectImage}
              close={this.state.modalDisappear}
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
