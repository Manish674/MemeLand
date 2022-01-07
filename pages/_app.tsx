import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DataContext } from "../utils/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const defaultValue = {
    user: {
      username: '',
      gmail: ''
    },
    theme: 'dark'
  }

  return (
    <DataContext.Provider value={defaultValue}>
      <Component {...pageProps} />
    </DataContext.Provider>
  )
}

export default MyApp
