// import SingleProduct from 'components/general/SingleProduct';
import Head from 'next/head';
import SingleProduct from '../../components/SingleProduct';
import { ALL_PRODUCTS_QUERY } from '../../graphql/queries';
import { Product } from '../../graphql/types';
import client from '../../lib/apolloClient';
import { ProductWithQuantity } from '../../lib/cartState';
import { ProductsQueryType } from '../../types/ProductsQueryType';

type SingleProductPageProps = {
  product: ProductWithQuantity;
};

const SingleProductPage: React.FC<SingleProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>

      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;

export async function getStaticPaths() {
  // GET ALL PRODUCTS FROM API

  /* eslint-disable */
    const { data: { products }} = await client.query<ProductsQueryType>({
        query: ALL_PRODUCTS_QUERY,
    });
    /* eslint-enable */

  // GET THE PATHS (SLUGS) FOR ALL PRODUCTS
  const paths = products.map(({ slug }: { slug: string }) => ({
    params: { slug },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

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
