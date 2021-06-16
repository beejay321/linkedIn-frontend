import { Container, Row, Col } from 'react-bootstrap';
import '../CardProfile.css';
import AddPost from './AddPost';
import GetPost from './FeedPage/GetPost';
import React from 'react';
import LeftColumnHomeFeed from './FeedPage/LeftColumn/LeftColumnHomeFeed';
import RightColumnHomeFeed from './FeedPage/RightColumn/RightColumnHomeFeed';
import './FeedPage/Post.css';
class Feeds extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/60c9be8b6f63455fa0ee7849`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
        console.log(this.state.user.avatar);
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
                <AddPost image={this.state.user.avatar} />
                <GetPost image={this.state.user.avatar} />
              </Col>
              <Col xs={3}>
                {' '}
                <RightColumnHomeFeed />{' '}
              </Col>
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default Feeds;
