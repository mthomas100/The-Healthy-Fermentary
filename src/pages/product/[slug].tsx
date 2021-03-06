// import SingleProduct from 'components/general/SingleProduct';
import { GetStaticPaths, GetStaticPathsResult, NextPage } from 'next';
import Head from 'next/head';
import SingleProduct from '../../components/shopping/SingleProduct';
import { ALL_PRODUCTS_QUERY } from '../../graphql/queries';
import client from '../../lib/apolloClient';
import { ProductsQueryType } from '../../types/ProductsQueryType';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';

type SingleProductPageProps = {
  product: ProductWithQuantity;
};

const SingleProductPage: NextPage<SingleProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>The Healthy Fermentary - {product.title}</title>
      </Head>

      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // GET ALL PRODUCTS FROM API

  /* eslint-disable */
    const { data: { products }} = await client.query<ProductsQueryType>({
        query: ALL_PRODUCTS_QUERY,
    });
    /* eslint-enable */

  // GET THE PATHS (SLUGS) FOR ALL PRODUCTS
  const paths = products.map(
    ({ slug }: { slug: ProductWithQuantity['slug'] }) => ({
      params: { slug },
    })
  ) as GetStaticPathsResult['paths'];

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  /* eslint-disable */
    const { data: { products } } = await client.query<ProductsQueryType>({
        query: ALL_PRODUCTS_QUERY,
        variables: {
            slug
        },
    });
    /* eslint-enable */

  const product = products[0];

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      product,
    },
  };
}
