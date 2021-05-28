import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Center } from "../components/Center/style";
import { GlobalStyle, theme } from "../shared/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>Whats next</title>
      </Head>
      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
