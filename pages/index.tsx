import Head from "next/head";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Renting</title>
        <meta
          name="description"
          content="Real Estate property management service for investors with multiple properties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Real Renting</Heading>
      </main>
    </>
  );
}
