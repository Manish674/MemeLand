import axios from './axios';
import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostContextProvider = ({ children }: any) => {
  const [hidden, setHidden] = useState(true);

  const createPost = async (postData) => {
    const { data } = await axios({
      method: 'POST',
      url: '/posts/',
      headers: {
        authorization: document.cookie,
      },
      data: {
        postData,
      },
    });
  };

  return (
    <PostContext.Provider
      value={{
        hidden,
        setHidden,
        createPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostContextProvider };
