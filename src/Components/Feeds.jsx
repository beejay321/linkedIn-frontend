import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../CardProfile.css";
import AddPost from "./AddPost";
import GetPost from "./FeedPage/GetPost";
import React from "react";
import LeftColumnHomeFeed from "./FeedPage/LeftColumn/LeftColumnHomeFeed";
import RightColumnHomeFeed from "./FeedPage/RightColumn/RightColumnHomeFeed";
import "./FeedPage/Post.css";
class Feeds extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
        console.log(this.state.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Container className="feed-container">
          <Col xs={{ offset: 1, span: 10 }}>
            <Row>
              <Col xs={3}>
                {/* <h1>first column</h1> */}
                <LeftColumnHomeFeed user={this.state.user} />
              </Col>
              <Col xs={6}>
                <AddPost image={this.state.user.image} />
                <GetPost image={this.state.user.image} />
              </Col>
              <Col xs={3}>
                {" "}
                <RightColumnHomeFeed />{" "}
              </Col>
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default Feeds;
