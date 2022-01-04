import Link from 'next/link';
import { Maybe, Scalars } from '../../graphql/types';

type ProductProps = {
  children: React.ReactNode;
  slug: Maybe<Scalars['String']>;
};

const ProductLink: React.FC<ProductProps> = ({ children, slug }) => {
  if (!slug) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return (
    <Link
      href={{
        pathname: '/product/[slug]',
        query: { slug },
      }}
    >
      <a>{children}</a>
    </Link>
  );
};

export default ProductLink;
