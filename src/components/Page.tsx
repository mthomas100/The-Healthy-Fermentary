import Head from "next/head";

/* This example requires Tailwind CSS v2.0+ */
function Layout({children}) {
    return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
  }
  

export const Page: React.FC<PageProps> = ({ children }) => (
    <>
        <Head>
            <title>Drone Store Concept</title>
        </Head>
        <Layout>{children}</Layout>
    </>
);