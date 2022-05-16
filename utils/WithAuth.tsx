import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  useValidateQuery,
  useRefreshAccessTokenMutation,
} from '../features/auth/authApi';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [token, setToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const router = useRouter();

    //TODO find how to use validate query function
    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!token || !refreshToken) {
        router.push('/login');
      }

      setToken(token);
      setRefreshToken(refreshToken);
    }, []);

    const { data, isLoading, error } = useValidateQuery(token, {
      skip: token ? false : true,
    });

    if (error) {
      router.push('/login');
      return;
    }


    return (
      <>
        {isLoading ? (
          <div>loading....</div>
        ) : data ? (
          <WrappedComponent
            {...props}
            refreshToken={refreshToken}
            data={data}
          />
        ) : (
          <div>Something went really really wrong</div>
        )}
      </>
    );
  };
};

export default withAuth;
