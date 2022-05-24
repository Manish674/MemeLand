import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetUserProfile {
  token: string;
  id: string;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? 'http://localhost:8000/api/v1/user/profile/'
        : `${process.env.NEXT_PUBLIC_URI}/api/v1/user/profile/`,
  }),

  endpoints: (builder) => ({
    getCurrentUserProfile: builder.query<any, string>({
      query(token) {
        return {
          url: '/',
          headers: {
            authentication: `Bearer ${token}`,
          },
        };
      },
    }),

    getUserProfile: builder.query<any, GetUserProfile>({
      query(data) {
        return {
          url: `/${data.id}`,
          headers: {
            authentication: `Bearer ${data.token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetCurrentUserProfileQuery } = profileApi;
