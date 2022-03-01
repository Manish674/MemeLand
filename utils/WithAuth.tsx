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
        Router.push('/');
      }
      console.log('Yup running this');
      const { data } = await axios({
        url: 'auth/validate',
        headers: {
          authentication: `Bearer ${token}`,
        },
      });
      setVerified(data.success);
    }

    if (verified) return <WrappedComponent {...props} />;
    return <div>You not authenticated</div>;
  };
};

export default withAuth;
