import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {NextUIProvider} from '@nextui-org/react';
import Header from '../components/Header';
import {darkTheme, lightTheme} from '../customThemes';
import Footer from '../components/Footer';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
