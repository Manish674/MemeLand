import React, { useState, useEffect } from 'react';
import { useGetPostsQuery } from './postApi';

// import axios from '../utils/axios';
import Post from './Post';
import { useRouter } from 'next/router';

const Posts = () => {
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setToken(token);
    }

    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data, error, isLoading } = useGetPostsQuery(token);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div style={{ marginBottom: '84px' }}>
          {data.posts.length > 0
            ? data.posts.map((props: any) => (
                <Post key={props._id} {...props} />
              ))
            : 'no imgs for now'}
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </div>
  );
};

export default Posts;
