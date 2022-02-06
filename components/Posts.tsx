import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = document.cookie.split(';')[1].trim();
      if (!token) return;

      const { data } = await axios({
        method: 'GET',
        url: '/posts',
        headers: {
          authentication: `Bearer ${token}`,
        },
      });
      setPosts(data.posts);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {posts.length > 0
        ? posts.map((props) => <Post key={props._id} {...props} />)
        : ''}
    </div>
  );
};

export default Posts;
