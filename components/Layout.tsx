import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactElement } from 'react';
import Head from 'next/head';

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon-32x32.png'></link>
        <title>Easy banking</title>
        <meta
          name='description'
          content="Easy bank provides it's users with world class banking services and boasts the  best customer support in the industry"
        />
        <meta property='og:image' content='/images/favicon-32x32.png' />
        <meta
          property='og:description'
          content="Easy bank provides it's users with world class banking services and boasts the  best customer support in the industry"
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Easy bankings' />
        <meta property='twiter:title' content='Easy bankings' />
      </Head>
      <Navbar />
      <main className='relative overflow-hidden'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
