import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';

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

const fetchPost = createAsyncThunk('posts/', async (token, thunkApi) => {
  const response = await axios({
    method: 'GET',
    url: '/posts',
    headers: {
      authentication: `Bearer ${token}`,
    },
  });

  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.entities.push(action.payload);
      state.loading = 'false';
    });
  },
});
