import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  MenuIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {() => (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
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
              <a href="#" className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  0
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
