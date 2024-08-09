import React from 'react';

import Card from './Card';

const Message = ({ name, lastTime, myReply }) => {
  return (
    <Card>
      <div className="flex justify-between">
        <p className="cursor-pointer text-sm font-bold">{name}</p>
        <p className="text-sm text-[#62646A]">{lastTime}</p>
      </div>
      <p className="text-sm mt-1">Me: {myReply}</p>
    </Card>
  );
};

export default Message;
