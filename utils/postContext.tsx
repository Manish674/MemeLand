import axios from './axios';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

type CreatePost = (postData: FormData) => void;

type UpdatePost = (id: string, dataToUpdate: any) => void;

type PostAppContext = {
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
  createPost: CreatePost;
  updatePost: UpdatePost;
};

const PostContext = createContext<PostAppContext | null>(null);

const PostContextProvider = ({ children }: any) => {
  const [hidden, setHidden] = useState(true);

  const createPost: CreatePost = async (postData) => {
    try {
      const response = await axios.post('/posts/', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authentication: `Bearer ${document.cookie}`,
        },
      });

      return response;
      // console.log(response.data);
    } catch (e: any) {
      console.log(e.message);
      console.log(e);
    }
  };

  const updatePost: UpdatePost = async (id, dataToUpdate) => {
    console.log(id, dataToUpdate);
  };

  const PostAppContext: PostAppContext = {
    hidden,
    setHidden,
    createPost,
    updatePost,
  };

  return (
    <PostContext.Provider value={PostAppContext}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostContextProvider };
