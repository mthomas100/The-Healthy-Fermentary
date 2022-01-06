import { ExclamationIcon } from '@heroicons/react/solid';
import React from 'react';

const Warning = () => {
  return (
    <div className="py-8">
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Hold on!</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                We are humbled that you like our selection enough to get to this
                point but alas we have some news. The Healthy Fermentary will
                not be in operation until later in 2022. Until then, feel free
                to subscribe to our newsletter for updates! We will let you know
                when our healthy selection is available for purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
