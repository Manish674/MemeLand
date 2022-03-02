// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  mediaUrl: string;
  postedBy: any;
  title: string;
}

export interface PostArray {
  entities: [];
  loading: 'idle' | 'true' | 'false';
}

const initialState = {
  entities: [],
  loading: 'idle',
};

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/posts/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, string>({
      query(token) {
        return {
          url: '/',
          headers: {
            authentication: `Bearer ${token}`,
          },
        };
      },
    }),

    createPost: builder.mutation<Post, boolean>({
      query(data) {
        return {
          url: 'posts',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
