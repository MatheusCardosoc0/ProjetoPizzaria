import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { store } from '../context'
import { theme } from '../style/theme'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
