import react from "react";
import { Card, Container } from "react-bootstrap";
import "./Post.css";
import PostCard from "./PostCard.jsx";
import { useState, useEffect } from "react";

const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0";
async function getAllPosts(auth) {
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url, { headers: { Authorization: auth } });
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    return data;
  }
}

export default function GetPost(props) {
  const [postData, updatePostData] = useState([]);
  useEffect(async () => {
    updatePostData(await getAllPosts(auth));
  }, []);
  console.log("postData", postData);

  function mapPosts(amount) {
    // const postLength = postData.length;
    return postData.slice(-7).map((post) => {
      return (
        <PostCard
          id={post._id}
          text={post.text}
          username={post.username}
          image={post.user.image}
          firstname={post.user.name}
          lastname={post.user.surname}
          title={post.user.title}
          updatedDate={post.updatedAt}
          postimage={post.image}
          profilepic={props.image}
          profile={post.user}
        />
      );
    });
  }

  return <div>{mapPosts().reverse()}</div>;
}
