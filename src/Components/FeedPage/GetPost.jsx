import "./Post.css";
import React from "react";
import PostCard from "./PostCard.jsx";
import { Spinner } from "react-bootstrap";

class GetPosts extends React.Component {
  state = {
    posts: [],
    isLoading: false,
  };

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/posts`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ posts: data, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div>
          {this.state.isLoading && (
            <Spinner className = "Spinner" animation="border" role="status">
              {/* <span className="sr-only"></span> */}
            </Spinner>
          )}
        </div>
        {this.state.posts
          .slice(-7)
          .reverse()
          .map((post) => (
            <PostCard
              post={post}
              key={post.createdAt}
              id={post._id}
              text={post.text}
              username={post.user[0].username}
              image={post.user[0].avatar}
              firstname={post.user[0].name}
              lastname={post.user[0].surname}
              title={post.user[0].title}
              updatedDate={post.updatedAt}
              postimage={post.image}
              profilepic={this.props.image}
              profile={post.user[0]}
            />
          ))}
      </>
    );
  }
}
export default GetPosts;
