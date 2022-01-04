import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Page } from '../components/layout/Page';
import { CartStateProvider } from '../lib/cartState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </CartStateProvider>
  );
}

export default MyApp;
