import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

type Children = React.ReactNode;

const PageWrapper: React.FC<Children> = ({ children }) => {
  return <div className="bg-gray-100 min-h-screen">{children}</div>;
};

const Layout: React.FC<Children> = ({ children }) => {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>;
};

const Contents: React.FC<Children> = ({ children }) => {
  return <div className="">{children}</div>;
};

export const Page: React.FC<Children> = ({ children }) => (
  <>
    <Head>
      <title>The Healthy Fermentary</title>
    </Head>
    <PageWrapper>
      <Layout>
        <Header />
        <Contents>{children}</Contents>
        <Footer />
      </Layout>
    </PageWrapper>
  </>
);
