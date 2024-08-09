import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';

const ProfileCard = () => {
  const [currentWidth, setCurrentWidth] = useState(null);

  useEffect(() => {
    const widthHandler = () => {
      const width = window.innerWidth;
      setCurrentWidth(width);
    };

    window.addEventListener('resize', widthHandler);

    return () => window.removeEventListener('resize', widthHandler);
  }, []);

  const profileText =
    currentWidth < 1030 && currentWidth > 880 ? 'ahadsty..' : 'ahadstylestar';

  return (
    <Card mb="mb-5">
      <div className="w-full relative">
        <i className="fa-regular fa-user text-5xl mr-6"></i>
        <h2 className="inline-block text-[#62646A] font-bold absolute bottom-3">
          {profileText}
        </h2>
      </div>
      <div className="flex justify-between my-5 border-b pb-3">
        <p className="text-gray-500 text-[1rem]">My level</p>
        <p className="text-gray-600 text-sm font-bold">New seller</p>
      </div>
      <div className="my-2 text-[#62646A]">
        <div className="flex justify-between pb-3">
          <p>Success score</p>
          <p>8</p>
        </div>
        <div className="flex justify-between pb-3">
          <p>Rating</p>
          <p>* 5</p>
        </div>
        <div className="flex justify-between pb-3">
          <p>Respone Rate</p>
          <p>-</p>
        </div>
      </div>
      <button className="font-bold border rounded-md w-[95%] py-2 mb-2 hover:bg-[#F5F5F5]">
        Go to level overview
      </button>
    </Card>
  );
};

export default ProfileCard;
