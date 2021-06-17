import React from "react";
import "./Post.css";
import { Card, Col, Row, Image, InputGroup, FormControl, Button, Accordion, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";

class PostCard extends React.Component {
  state = {
    likes: [],
    comments: [],
    user: {},
    new: {
      comment: "",
    },
  };

  grabLikes = async (postId) => {
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/posts/${postId}/likes`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ likes: data[0] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async (postId) => {
    this.grabLikes(postId);
    this.getComments();
  };

  addLike = async (postId) => {
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/posts/${postId}/addlike`, { method: "POST" });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getComments = async () => {
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/posts/${this.props.id}/comment`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data);
        if (data) {
          this.setState({ comments: data });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  addComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/posts/${this.props.id}/comment`, {
        method: "POST",
        body: JSON.stringify(this.state.new),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("comment added)");
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      alert("comment failed to post");
      console.log(error);
    }
  };

  // editComment = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       `https://api-linkedin-api.herokuapp.com/posts/comment/${this.state.comment}`,
  //       {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(this.state.new),
  //       }
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };

  // deleteComment = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       `https://api-linkedin-api.herokuapp.com/posts/comment/${this.state.commentId}`,
  //       {
  //         method: 'DELETE',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(this.state.experience),
  //       }
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      ...this.state,
      new: { ...this.state.new, [id]: e.target.value },
    });
  };

  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card className="mt-2 mb-2 getPost-card">
          <Card.Header className="bg-white border-0">
            <Row>
              <Col className="float-left" xs={2}>
                <Link id="profilelinks" to={`/user/${this.props.profile._id}`}>
                  <Image className="getPost-img" src={this.props.image} />
                </Link>
              </Col>
              <Col xs={8} className="align-text-bottom">
                <Link id="profilelinks" to={`/user/${this.props.profile._id}`}>
                  <span className="getPost-person-name font-weight-bold">
                    {this.props.firstname} {this.props.lastname}{" "}
                  </span>{" "}
                </Link>
                <span className="sidebar-span text-muted">{" \u2022 "}</span>
                <span className="sidebar-span text-muted">2nd</span>
                <br />
                <span className="text-muted">{this.props.title}</span>
                <br />
                <span className="text-muted">{this.props.updatedDate}</span>
              </Col>
              <Col className="float-right" xs={1}>
                <DropdownButton
                  className="getPost-dropDown-button rounded-circle"
                  as={InputGroup.Prepend}
                  variant="outline-none-secondary"
                  title={<i class="bi bi-three-dots"></i>}
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">
                    <i class="bi bi-bookmark"></i> Save
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i class="bi bi-link-45deg"></i> Copy Link action
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i class="bi bi-eye-slash"></i> I don't want to see this else here
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <i class="bi bi-megaphone"></i> Report
                  </Dropdown.Item>
                </DropdownButton>
                <Button className="bg-white border-0"></Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="py-0">
            <p>{this.props.text}</p>
            <div>
              <Card.Img className="postImg" src={this.props.postimage} />
            </div>{" "}
            <hr className="text-muted my-0 py-0" />
            <span>
              <span className="feeds-group-icons-like">see likes</span>
              <div className="feeds-like-reactions"> {/* HERE ARE PEOPPLE{this.state.likes.likes[0].name} */}</div>
            </span>
            {/* <button onClick={() => this.addLike(this.props.id)}>
              {" "}
              <AiOutlineLike className="feeds-icons-bottom" />
              like
            </button> */}
            <Col className="getPost-comment-section ">
              <Button className="getPost-like-btn mx-1" onClick={() => this.addLike(this.props.id)}>
                <Row>
                  <span>
                    <i class="bi bi-hand-thumbs-up"></i> Like
                  </span>
                </Row>
              </Button>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Button className="getPost-comment-btn mx-1">
                  <Row>
                    <span>
                      <i class="bi bi-input-cursor-text"></i> Comment
                    </span>
                  </Row>
                </Button>
              </Accordion.Toggle>

              <Button className="getPost-share-btn mx-1">
                <Row>
                  <span>
                    <i class="bi bi-folder-symlink"></i> Share
                  </span>
                </Row>
              </Button>

              <Button className="getPost-send-btn mx-1" onClick={this.addComment} type="submit" id="savecommentbtn" variant="outline" size="md" className="text-muted ">
                <Row>
                  <span>
                    <i class="bi bi-cursor"></i>
                    Send
                  </span>
                </Row>
              </Button>
            </Col>
            <Accordion.Collapse eventKey="1">
              <div>
                <Row className="mt-3">
                  <Col xs={2}>
                    <Link id="profilelinks" to={`/user/${this.props.profile._id}`}>
                      <Image className="getPost-comment-img" src={this.props.profilepic} />
                    </Link>
                  </Col>

                  <Col xs={10} className="align-text-bottom">
                    <InputGroup className="mb-3">
                      <FormControl
                        className="getPost-commentInput"
                        // value={this.state.new.comment}
                        id="comment"
                        onChange={this.handleChange}
                        as="textarea"
                        aria-label="Text input with checkbox"
                        placeholder="Add a comment..."
                      />
                      <div className="addpostfooterbtn-section d-flex justify-content-between ">
                        <Button className="addpostfooterbtn mx-1">
                          <Row>
                            <Col>
                              <i className="bi bi-card-image"></i>
                            </Col>
                          </Row>
                        </Button>
                      </div>
                      {/* <MediaModal id={props.id} /> */}

                      <Button className="getPost-commentSend-btn mx-1" type="submit" disabled>
                        <i className="bi bi-reply"></i>
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
                {this.state.comments.map((item) => (
                  <Row className="commentDiv">
                    <Col className="float-left " xs={2}>
                      <Image className="getPost-img" src={item.user.avatar} />
                    </Col>

                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <div className="commentCol">
                          <Link id="profilelinks" to={`/user/${item.user._id}`}>
                            <span className="getPost-person-name font-weight-bold">
                              {item.user.name} {item.user.surname}
                            </span>
                          </Link>
                          <span className="sidebar-span text-muted">{" \u2022 "}</span>
                          <span className="sidebar-span text-muted">2nd</span>
                          <br />
                          <span className="text-muted">{item.user.title}</span>

                          <br />
                          <span>{item.comment}</span>
                          <br />
                          <div className="editDel d-flex justify-content-between ">
                            <Button className="getPost-comment-btn mx-1" variant="outline">
                              <span>Edit</span>
                            </Button>
                            <Button className="getPost-comment-btn mx-1" variant="outline">
                              <span>Del</span>
                            </Button>{" "}
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                ))}
              </div>
            </Accordion.Collapse>
          </Card.Body>
        </Card>
      </Accordion>
    );
  }
}

export default PostCard;
