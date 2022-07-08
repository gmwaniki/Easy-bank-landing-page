import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactElement } from 'react';

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
