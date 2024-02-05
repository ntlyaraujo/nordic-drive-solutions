import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

/*
Author: Nataly Christine Araujo
Company: Logikfabriken
*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Volvo Cars</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
