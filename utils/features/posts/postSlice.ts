// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  mediaUrl: string;
  postedBy: any;
  title: string;
}

export interface PostArray {
  entities: [];
}

interface PostRequest {
  data: FormData;
  token: string;
}

const initialState = {
  entities: [],
  loading: 'idle',
};

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/posts/' }),
  endpoints: (builder) => ({
    // Post is the data returned and string is the parameter passed
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

    createPost: builder.mutation<void, PostRequest>({
      query(data) {
        return {
          method: 'POST',
          url: '/',
          headers: {
            authentication: `Bearer ${data.token}`,
          },

          body: data.data,
        };
      },
    }),

    updatePost: builder.mutation<void, { id: string; Post: Post }>({
      query(data) {
        return {
          url: `${data.id}`,
          method: 'PUT',
          body: data.Post,
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
