import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Meta from './components/Meta';

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
