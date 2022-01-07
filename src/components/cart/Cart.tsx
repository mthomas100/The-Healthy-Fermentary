import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../lib/cartState';
import useCost from '../../lib/useCost';
import Button from '../general/Button';
import Warning from '../general/Warning';
import ModifyCartSelector from './ModifyCartSelector';

export default function Cart() {
  const { cartContents: cart, removeFromCart, cartSubTotal } = useCart();
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
                <li key={cartItem.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0 relative w-24 h-24 sm:w-32 sm:h-32">
                    {cartItem.image?.url && (
                      <Image
                        src={cartItem.image?.url}
                        alt={cartItem.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        className="rounded-lg"
                      />
                    )}
                  </div>

                  <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">{cartItem.title}</h3>
                        </div>

                        <p className="text-sm font-medium text-gray-900 text-right">
                          ${cartItem.price}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                        <ModifyCartSelector product={cartItem} />
                        {/* / TODO: INVESTIVATE WHY NO TYPE ERROR IF NO PROPS PROVIDED */}
                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                          onClick={() => removeFromCart(cartItem)}
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                      <XIcon
                        className="flex-shrink-0 h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />

                      <span>Out of stock</span>
                    </p> */}
                  </div>
                </li>
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
              <Button urlRoute="/checkout" text="Checkout" />
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
