import React from 'react';

const FooterCard = ({ title, allItems }) => {
  const afterHoverLi = 'hover:underline hover:cursor-pointer';

  return (
    <div>
      <p className="font-bold text-black mb-5">{title}</p>
      <ul className="text-[#74767E] flex flex-col gap-4">
        {allItems.map((item, ind) => (
          <li className={afterHoverLi} key={ind}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
