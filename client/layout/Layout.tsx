import React, { useEffect, useLayoutEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const siteTitle = 'Next.js Sample Website';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  useEffect(() => {
    document.body.className = 'lightMode';
  }, []);

  return (
    <>
      <Meta siteTitle={siteTitle} title={title} />
      <Header />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
