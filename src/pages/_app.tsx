import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'
import { Provider as AuthProvider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#06092b" />
              <link
                rel="mask-icon"
                href="/img/hero-illustration.svg"
                color="#06092b"
              />
              <meta
                name="description"
                content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
              />
            </Head>

            <GlobalStyles />
            <NextNprogress
              color={theme.colors.primary}
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
