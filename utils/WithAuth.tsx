import axios from './axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useValidateQuery } from '../features/auth/authApi';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [verified, setVerified] = useState<boolean | null>(null);
    const Router = useRouter();

    //TODO find how to use validate query function
    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      if (!token) Router.push('/signup');
      verification(token);
      if (verified === false) {
        Router.push('/login');
      }
    }, [verified]);


    async function verification(token: string | null) {
      if (!token) return Router.push('/signup');
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
