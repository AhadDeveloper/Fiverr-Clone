import React from 'react';

import StepCard from './StepCard';

const stepCardData = [
  {
    id: 1,
    iconClasses: 'fa-solid fa-bullhorn',
    title: 'Get noticed',
    detail: {
      first: 'Tap into the power of social media by',
      spanText: ' sharing your Gig,',
      last: ' and get expert help to grow your impact.',
    },
    buttonText: 'Share Your Gigs',
  },
  {
    id: 2,
    iconClasses: 'fa-solid fa-book-open-reader',
    title: 'Get more skills & exposure',
    detail: {
      first:
        'Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and',
      spanText: ' gain more exposure',
      last: ' with every course completed.',
    },
    buttonText: 'Explore Learn',
  },
  {
    id: 3,
    iconClasses: 'fa-regular fa-star',
    title: 'Become a successful seller!',
    detail: {
      first:
        'Watch this free online course to learn how to create an outstanding service experience for your buyer and',
      spanText: ' grow your career',
      last: ' as an online freelancer.',
    },
    buttonText: 'Watch Free Course',
  },
];

const TopSellerSteps = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <p className="text-[#62646A] text-sm font-semibold mr-4">
          Upgrade Your Business
        </p>
        <p className="border flex-auto"></p>
      </div>
      <div className="bg-white px-6 py-8">
        <h1 className="text-2xl font-bold">
          3 steps to become a top seller on Fiverr
        </h1>
        <p className="text-gray-600 my-2">
          The key to your success on Fiverr is the brand you build for yourself
          through your Fiverr reputation. We gathered some tips and resources to
          help you become a leading seller on Fiverr.
        </p>
        <div className="grid grid-cols-3 gap-7">
          {stepCardData.map((item) => (
            <StepCard
              key={item.id}
              iconClasses={item.iconClasses}
              title={item.title}
              first={item.detail.first}
              spanText={item.detail.spanText}
              last={item.detail.last}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellerSteps;
