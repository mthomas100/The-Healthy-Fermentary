import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useFilter } from '../../lib/filterState';

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function Sort() {
  const { setActiveSort, activeSort } = useFilter();
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          {activeSort === ''
            ? 'Sort'
            : sortOptions.find((option) => option.value === activeSort)?.label}
          <ChevronDownIcon
            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((option) => (
              <Menu.Item
                key={option.label}
                onClick={() => setActiveSort(option.value)}
              >
                {({ active }) => (
                  <div className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 cursor-pointer">
                    {option.label}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
