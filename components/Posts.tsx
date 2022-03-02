import React, { useState, useEffect } from 'react';
import { useGetPostsQuery } from '../utils/features/posts/postSlice';

// import axios from '../utils/axios';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('_t');

  if (token === null) return <div>You are not authorize</div>;

  const { data, error, isLoading } = useGetPostsQuery(token);
  console.log(data);

  if (isLoading) {
    return <div>..........loading</div>;
  } else if (data) {
    return (
      <div style={{ marginBottom: '84px' }}>
        {data.posts.length > 0
          ? data.posts.map((props) => <Post key={props._id} {...props} />)
          : ''}
      </div>
    );
  } else if (error) {
    console.log(error);
    return <div>something went wrong</div>;
  }

  return <div></div>;

  // const fetchPosts = async () => {
  //   try {
  //     const token = document.cookie;
  //     if (!token) return;

  //     const { data } = await axios({
  //       method: 'GET',
  //       url: '/posts',
  //       headers: {
  //         authentication: `Bearer ${token}`,
  //       },
  //     });
  //     setPosts(data.posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
};

export default Posts;
