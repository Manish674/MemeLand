import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Login {
  email: string;
  password: string;
  token: string;
}

interface Register extends Login {
  username: string;
  dateOfBirth: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? 'http://localhost:8000/api/v1/auth/'
        : `${process.env.NEXT_PUBLIC_URI}/api/v1/auth/`,
  }),

  endpoints: (builder) => ({
    login: builder.mutation<void, Login>({
      // Data is the args given to the useMutationLogin hook
      // in this case data is { email, password, token }
      query(data) {
        return {
          method: 'POST',
          url: '/login',
          headers: {
            authentication: `Bearer ${data.token}`,
          },
          body: {
            email: data.email,
            password: data.password,
          },
        };
      },
    }),

    register: builder.mutation<any, Omit<Register, 'token'>>({
      query(data) {
        return {
          method: 'POST',
          url: '/register',
          body: {
            username: data.username,
            email: data.email,
            password: data.password,
            dateOfBirth: data.dateOfBirth,
          },
        };
      },
    }),

    // TODO should you change it to post instead of get ?
    validate: builder.query<void, string>({
      query(token) {
        return {
          url: '/validate',
          headers: {
            authentication: `Bearer ${token}`,
          },
        };
      },
    }),

    refreshAccessToken: builder.mutation<void, string>({
      query(refreshToken) {
        return {
          url: '/refresh-access-token',
          method: 'POST',
          headers: {
            authentication: `Bearer ${refreshToken}`,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useValidateQuery,
  useRefreshAccessTokenMutation,
} = authApi;
