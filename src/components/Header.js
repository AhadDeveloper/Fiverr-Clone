import { useState, useEffect } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import FiverrLogo from '../assets/fiverr-2.svg';

import Modal from './UI/Modal';

const Header = () => {
  const [navIconWidth, setNavIconWidth] = useState(window.innerWidth);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    const sizeHandler = () => {
      const width = window.innerWidth;
      setNavIconWidth(width);
    };

    window.addEventListener('resize', sizeHandler);

    return () => window.removeEventListener('resize', sizeHandler);
  }, []);

  const displayNavIcon = navIconWidth < 1160;

  const sideNavHandler = () => {
    setSideNav(true);
  };

  const backdropHandler = () => {
    setSideNav(false);
  };

  const paragraphStyling = 'px-4 py-[10px] hover:bg-[#f5f5f5] rounded-sm';
  const iconsStyling =
    'px-4 py-3 hover:bg-[#f5f5f5] rounded-sm text-[1.3rem] text-gray-500';

  return (
    <div className="bg-white w-full py-[1.2rem] px-9">
      <div className="flex justify-between">
        <div className="flex justify-between items-center font-bold text-[rgb(98,100,106)] cursor-pointer">
          {sideNav && <Modal onClick={backdropHandler} />}
          {displayNavIcon && (
            <AiOutlineMenu
              onClick={sideNavHandler}
              className="text-[1.7rem] mr-4"
            />
          )}
          <img className="w-[5.5rem] mr-4" src={FiverrLogo} alt="fiverr logo" />
          {!displayNavIcon && (
            <>
              <p className={paragraphStyling}>Dashboard</p>
              <p className={paragraphStyling}>
                My Business <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p className={paragraphStyling}>
                Growth & Marketing{' '}
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p className={paragraphStyling}>
                Analytics <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
            </>
          )}
        </div>
        <div className="flex justify-between cursor-pointer h-full items-center">
          <i className={`${iconsStyling} fa-solid fa-magnifying-glass`}></i>
          <i className={`${iconsStyling} fa-regular fa-bell`}></i>
          <i className={`${iconsStyling} fa-regular fa-envelope`}></i>
          <i className={`${iconsStyling} fa-regular fa-circle-question`}></i>
          <i className={`${iconsStyling} fa-regular fa-user`}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
