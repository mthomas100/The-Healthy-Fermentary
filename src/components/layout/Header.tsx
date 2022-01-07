import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useCart } from '../../lib/cartState';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC = () => {
  const { cartItemTotal } = useCart();

  return (
    <Disclosure as="header" className="bg-white shadow-md sticky top-0 z-50">
      {() => (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          {/* Brand */}
          <div className="relative h-16 flex justify-between items-center">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a>
                    <div className="font-reenieBeanie text-2xl xxs:text-[1.7rem] sm:text-4xl tracking-wide">
                      The Healthy Fermentary
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-8">
              <Link href="/cart">
                <a className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {cartItemTotal > 0 && (
                    <div className="w-[1.05rem] h-[1.05rem] bg-red-500 rounded-full flex justify-center self-start items-center">
                      <span className="text-[10px] font-medium text-gray-100">
                        {cartItemTotal}
                      </span>
                    </div>
                  )}

                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Header;
