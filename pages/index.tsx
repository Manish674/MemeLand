import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRefreshAccessTokenMutation } from '../features/auth/authApi';
import PostGrid from '../features/posts';
import Layout from '../components/Layout';
import WithAuth from '../utils/WithAuth';

const Home = ({ data, refreshToken }: any) => {
  const [trigger] = useRefreshAccessTokenMutation();
  const router = useRouter();

  useEffect(() => {
    const updateAccessToken = async (token: string) => {
      const res: any = await trigger(token);
      if (res.data.success) {
        localStorage.removeItem('accessToken');
        localStorage.setItem('accessToken', res.data.accessToken);
      } else if (res.data.success === false) {
        router.push('/signup');
      }
    };

    const res = updateAccessToken(refreshToken);
  }, []);

  return (
    <Layout>
      <PostGrid />
    </Layout>
  );
};
export default WithAuth(Home);
