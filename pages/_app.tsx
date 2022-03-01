import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PostContextProvider } from '../utils/postContext';
import { AuthContextProvider } from '../utils/authContext';

import store from '../utils/store';
import { Provider } from 'react-redux';

// import { useEffect } from 'react';
// import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {}, []);

  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />{' '}
        </Provider>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
