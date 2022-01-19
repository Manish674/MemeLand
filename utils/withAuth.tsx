import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import verfifyToken from './verifyToken';

const withAuth = (WrappedComponent: any) => {
  const [verified, setVerified] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    verification();
  }, []);

  async function verification() {
    if (!document.cookie) {
      // let token = document.cookie;
      Router.replace('/');
    } else if (document.cookie) {
      Router.replace('/home');
      setVerified(true);
    }
  }

  if (!verified) return null;
  return <WrappedComponent />;
};

export default withAuth;
