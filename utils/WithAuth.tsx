import axios from './axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [verified, setVerified] = useState(false);
    const Router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('_t');
      verification(token);
    }, []);

    async function verification(token: string | null) {
      if (!token) {
        console.log('no token');
        localStorage.setItem('isAuth', 'false');
        Router.push('/');
      }

      const { data } = await axios({
        url: 'auth/validate',
        headers: {
          authentication: `Bearer ${token}`,
        },
      });
      const value = data.success;

      if (value === false) {
        localStorage.setItem('isAuth', 'false');
      }

      setVerified(value);
    }

    if (verified) return <WrappedComponent {...props} />;
    else if (!verified) {
      return <div>NOT AUTHORIZED</div>;
    }

    return <div>something</div>;
  };
};

export default withAuth;
