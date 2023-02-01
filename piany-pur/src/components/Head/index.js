import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

export default function Header({ name, description, canonical }) {
  const router = useRouter();
  return (
    <Head>
      <meta charset="utf-8" />
      <link
        rel="icon"
        href="/images/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        href="/images/favicon.png"
      />
      <link
        rel="shortcut icon"
        href="/images/favicon.png"
      />
      <title>{name} | Coderburg</title>
      <meta name="twitter:title" content={name} />
      <meta property="og:title" content={name} />
      <meta name="description" content={description} />
      <meta name="author" content="Eric Kulbiej" />
      <meta
        property="og:description"
        content="The only coding learning website you need."
      />
      <meta
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />
      <meta property="og:type" content="website"></meta>

      <link rel="canonical" href={"https://coderburg.com" + router.pathname}></link>

    </Head>
  );
}
