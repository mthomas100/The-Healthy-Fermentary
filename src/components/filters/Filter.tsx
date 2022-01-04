import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import { Category } from '../../graphql/types';

const filters = [
  {
    id: 'filter',
    name: 'Filter',
    options: [
      { value: 'All', label: 'All', checked: false },
      { value: 'New', label: 'New', checked: false },
      { value: 'Popular', label: 'Popular', checked: false },
      {
        value: 'Recommended by Us',
        label: 'Recommended by Us',
        checked: false,
      },
    ],
  },
];

// TODO: Replace hardcoded filters above with dynamic filters from the server (see below)

type FilterProps = {
  categories: Category[];
};

const Filter: React.FC<FilterProps> = ({ categories }) => {
  return (
    <Popover.Group className="sm:flex sm:items-baseline sm:space-x-8">
      {filters.map((section, sectionIdx) => (
        <Popover
          as="div"
          key={section.name}
          id="menu"
          className="relative z-10 inline-block text-left"
        >
          <div>
            <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <span>{section.name}</span>
              {sectionIdx === 0 ? (
                <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
                  0
                </span>
              ) : null}
              <ChevronDownIcon
                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Popover.Button>
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
            <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <form className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`filter-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={option.value}
                      defaultChecked={option.checked}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </form>
            </Popover.Panel>
          </Transition>
        </Popover>
      ))}
    </Popover.Group>
  );
};

export default Filter;
