import Link from 'next/link';
import { useCart } from '../../lib/cartState';
import useCost from '../../lib/useCost';
import CheckoutButton from '../general/CheckoutButton';
import Warning from '../general/Warning';
import CartItem from './CartItem';

export default function Cart() {
  const { cartContents: cart, cartSubTotal } = useCart();
  const cost = useCost(cartSubTotal);

  return (
    <div className="bg-white">
      <Warning />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((cartItem) => (
                <CartItem cartItem={cartItem} />
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 text-sm divide-y divide-gray-200">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">
                      {cost.subtotalCost}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">
                      {cost.shippingCost}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">
                      {cost.taxCost}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      {cost.orderTotal}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <CheckoutButton />
            </div>

            <div className="mt-6 text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link href="/">
                  <a className="text-indigo-600 font-medium hover:text-indigo-500">
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
