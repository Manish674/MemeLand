import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PostContextProvider } from '../utils/postContext';
import { AuthContextProvider } from '../utils/authContext';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
  }, []);

  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Component {...pageProps} />{' '}
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
