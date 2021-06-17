import './Post.css';
import PostCard from './PostCard.jsx';
import { useState, useEffect } from 'react';

async function getAllPosts() {
  const url = 'https://api-linkedin-api.herokuapp.com/posts';
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
}

export default function GetPost(props) {
  const [postData, updatePostData] = useState([]);
  useEffect(async () => {
    updatePostData(await getAllPosts());
  }, []);
  // console.log('postData', postData._id);

  function mapPosts() {
    // const postLength = postData.length;
    return postData.slice(-7).map((post) => {
      return (
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
          profilepic={props.image}
          profile={post.user[0]}
        />
      );
    });
  }

  return <div>{mapPosts().reverse()}</div>;
}
