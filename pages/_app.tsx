import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PostContextProvider } from '../utils/postContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostContextProvider>
      <Component {...pageProps} />{' '}
    </PostContextProvider>
  );
}

export default MyApp;
