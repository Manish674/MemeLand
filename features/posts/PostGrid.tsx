import React, { useState, useEffect } from 'react';
import { useGetPostsQuery } from './postApi';

// import axios from '../utils/axios';
import Post from './Post';

const Posts = () => {
  const token = localStorage.getItem('accessToken');

  if (token === null) return <div>You are not authorize</div>;

  const { data, error, isLoading } = useGetPostsQuery(token);
  console.log(data);

  return <div>Hello world</div>;
  // if (isLoading) {
  //   return <div>..........loading</div>;
  // } else if (data) {
  //   return (
  //     <div style={{ marginBottom: '84px' }}>
  //       {data.posts.length > 0
  //         ? data.posts.map((props: any) => <Post key={props._id} {...props} />)
  //         : 'no imgs for now'}
  //     </div>
  //   );
  // } else if (error) {
  //   console.log(error);
  //   return <div>something went wrong</div>;
  // } else {
  //   return <div>Exception</div>;
  // }
};

export default Posts;
