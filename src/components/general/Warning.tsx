import { ExclamationIcon } from '@heroicons/react/solid';
import React from 'react';

const Warning = () => {
  return (
    <div className="pt-8">
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                This page is under development and is displayed for
                demonstration purposes only. Check back later in 2022 to make a
                purchase from The Healthy Fermentary
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
