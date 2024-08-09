import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="w-full h-screen fixed top-0 left-0 bg-[#7F7F7F] z-10 opacity-55"
    ></div>
  );
};

const Sidebar = () => {
  const liStyling = 'py-5 px-2 font-bold border-b-2 cursor-pointer';

  return (
    <div className="fixed top-0 left-0 bg-white h-screen w-80 px-8 py-6 z-20">
      <div className="flex justify-start items-center mb-7">
        <i className="fa-regular fa-user text-3xl mr-6"></i>
        <div>
          <p className="font-bold">ahadstylestar</p>
          <p className="text-sm text-gray-500">abc123@gmail.com</p>
        </div>
      </div>
      <ul>
        <li className={liStyling}>Dashboard</li>
        <li className={liStyling}>My Business</li>
        <li className={liStyling}>Growth & Marketing</li>
        <li className={liStyling}>Analytics</li>
      </ul>
    </div>
  );
};

const modalOverlay = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        modalOverlay
      )}
      {ReactDOM.createPortal(<Sidebar />, modalOverlay)}
    </Fragment>
  );
};

export default Modal;
