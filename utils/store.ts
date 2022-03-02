import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { postApi } from './features/posts/postSlice';

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  // to enable caching and other useful features
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

// for refecting stuff when change the db
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;