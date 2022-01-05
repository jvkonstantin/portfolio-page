import Head from "next/head";
import React from "react";
import About from "../components/About";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Kappa</title>
        <link rel="icon" href="/hat.png" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
}
