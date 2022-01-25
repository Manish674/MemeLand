import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PostContextProvider } from '../utils/postContext';
import { AuthContextProvider } from '../utils/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Component {...pageProps} />{' '}
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
