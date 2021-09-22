import Head from 'next/head';
import React from 'react';

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-300 flex flex-1 relative">
      <Head>
        <title>Michael Hodges - Portfolio</title>
        <meta name="description" property="og:description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="min-h-screen w-full px-4 sm:px-10 md:px-20">
        {children}
      </main>
    </div>
  );
}

export default Page;
