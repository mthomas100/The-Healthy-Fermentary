import Head from 'next/head';
import React from 'react';
import Cart from '../components/cart/Cart';

export default function CartPage() {
  return (
    <>
      <Head>
        <title>The Healthy Fermentary - Cart</title>
      </Head>
      <Cart />
    </>
  );
}
