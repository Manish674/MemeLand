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

// const initialState = {
//   entities: [],
//   loading: 'idle',
// };

export const postApi = createApi({
  reducerPath: 'postApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://memeland4905.herokuapp.com/api/v1/posts/' }),
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC === 'dev'
        ? 'http://localhost:8000/api/v1/posts/'
        : `${process.env.NEXT_PUBLIC_URI}/api/v1/posts/`,
  }),
  endpoints: (builder) => ({
    // Post is the data returned and string is the parameter passed
    getPosts: builder.query<any, string>({
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

    updatePost: builder.mutation<void, { id: string; Post: Partial<Post> }>({
      query(data) {
        return {
          url: `${data.id}`,
          method: 'PUT',
          body: data.Post,
        };
      },
    }),

    deletePost: builder.mutation<void, string>({
      query(id) {
        return {
          url: `${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
