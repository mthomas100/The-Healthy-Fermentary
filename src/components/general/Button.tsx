import Link from 'next/link';
import React from 'react';

export default function Button({
  urlRoute,
  text,
}: {
  urlRoute: string;
  text: string;
}) {
  return (
    <Link href={urlRoute}>
      <a>
        <button
          type="submit"
          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          {text}
        </button>
      </a>
    </Link>
  );
}
