import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './Navbar';

type Children = React.ReactNode;

const PageWrapper: React.FC<Children> = ({ children }) => {
  return <div className="bg-gray-100">{children}</div>;
};

const Layout: React.FC<Children> = ({ children }) => {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>;
};

export const Page: React.FC<Children> = ({ children }) => (
  <>
    <Head>
      <title>Drone Store Concept</title>
    </Head>
    <PageWrapper>
      <Layout>
        <NavBar />
        {children}
        <Footer />
      </Layout>
    </PageWrapper>
  </>
);
