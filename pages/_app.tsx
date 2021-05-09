import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Real Renting</title>
        <meta
          name="description"
          content="Real Estate property management service for investors with multiple properties"
        />
        <meta name="theme-color" content="#1b1b1e" />
        <meta name="apple-mobile-web-app-status-bar" content="#1b1b1e" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo_96x96.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
