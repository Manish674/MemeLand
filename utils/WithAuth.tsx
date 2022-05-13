import { useEffect, useState } from 'react';
import { useValidateQuery } from '../features/auth/authApi';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [token, setToken] = useState<string | null>(null);
    const [skip, setSkip] = useState<boolean>(false);

    //TODO find how to use validate query function
    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      setToken(token);
    }, []);

    const { data, isLoading, error } = useValidateQuery(token, {
      skip: token ? false : true,
    });

    console.log(data);

    return (
      <>
        {isLoading ? (
          <div>loading....</div>
        ) : data ? (
          <WrappedComponent {...props} />
        ) : (
          <div>Something went really really wrong</div>
        )}
      </>
    );
  };
};

export default withAuth;
