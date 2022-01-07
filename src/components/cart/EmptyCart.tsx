/* This example requires Tailwind CSS v2.0+ */
import { InformationCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">Your cart is empty </p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <Link href="/">
              <a className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                Back to product selection <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
