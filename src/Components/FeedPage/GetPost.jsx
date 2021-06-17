import "./Post.css";
import React from "react";
import PostCard from "./PostCard.jsx";
import { useState, useEffect } from "react";

class GetPosts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/posts`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ posts: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        {this.state.posts
          .slice(-7)
          .reverse()
          .map((post) => (
            <PostCard
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


