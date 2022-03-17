import '../styles/globals.css';
import 'swiper/swiper.min.css';
import type { AppProps } from 'next/app';

import { NextPage } from 'next';
import type { ReactElement } from 'react';
import { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header';
import { darkTheme, lightTheme } from '../customThemes';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { AppProvider } from 'shared';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout;

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <AppProvider>
        <NextUIProvider>
          {Component.getLayout ? (
            getLayout(<Component {...pageProps} />)
          ) : (
            <Background>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </Background>
          )}
        </NextUIProvider>
      </AppProvider>
    </NextThemesProvider>
  );
}

export default App;
