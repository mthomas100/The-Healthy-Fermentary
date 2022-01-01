import Head from 'next/head';

type Children = React.ReactNode;

const Layout: React.FC<Children> = ({ children }) => {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>;
};

export const Page: React.FC<Children> = ({ children }) => (
  <>
    <Head>
      <title>Drone Store Concept</title>
    </Head>
    <Layout>{children}</Layout>
  </>
);
