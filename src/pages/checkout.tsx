import Head from 'next/head';
import React from 'react';
import Checkout from '../components/Checkout';

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>The Healthy Fermentary - Checkout</title>
      </Head>
      <Checkout />
    </>
  );
}
