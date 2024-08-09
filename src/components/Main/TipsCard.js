import React from 'react';

import Card from '../UI/Card';

const TipsCard = ({ title, description }) => {
  return (
    <Card mb="mb-2">
      <div className="flex justify-between items-center cursor-pointer">
        <div>
          <p className="font-bold pb-1">{title}</p>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex items-center text-gray-400">
          <i className="fa-solid fa-xmark text-xl px-4"></i>
          <p className="text-2xl px-4">&gt;</p>
        </div>
      </div>
    </Card>
  );
};

export default TipsCard;
