import React from 'react';

import Card from '../UI/Card';

const ActiveOrders = () => {
  return (
    <Card mb="mb-8">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">
          Active orders
          <span className="text-gray-400"> - 0 ($0)</span>
        </p>
        <button className="border-2 py-2 px-3">Active Orders (0)</button>
      </div>
    </Card>
  );
};

export default ActiveOrders;
