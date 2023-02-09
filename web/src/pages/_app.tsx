import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { store } from '../context'
import { theme } from '../style/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
