import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Page } from '../components/layout/Page';
import { CartStateProvider } from '../lib/cartState';
import { FilterStateProvider } from '../lib/filterState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateProvider>
      <FilterStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </FilterStateProvider>
    </CartStateProvider>
  );
}

export default MyApp;
