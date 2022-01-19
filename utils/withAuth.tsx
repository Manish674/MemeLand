import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import verfifyToken from './verifyToken';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [verified, setVerified] = useState(false);
    const Router = useRouter();

    useEffect(() => {
      verification();
    }, []);

    async function verification() {
      if (!document.cookie) {
        // let token = document.cookie;
        Router.push('/');
      } else if (document.cookie) {
        if (document.cookie.length > 5) {
          Router.push('/home');
          setVerified(true);
        } else if (document.cookie.length < 5) {
          Router.push('/');
        }
      }
    }

    if (verified) return <WrappedComponent {...props} />;
    return null;
  };
};

export default withAuth;
