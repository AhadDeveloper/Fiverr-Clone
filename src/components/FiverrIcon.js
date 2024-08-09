import FiverrIconSvg from '../assets/fiverr-icon.svg';

const FiverrIcon = () => {
  return (
    <div className="w-full h-screen fixed left-[95%] top-[88%] z-30">
      <img className="w-11" src={FiverrIconSvg} alt="fiverr icon" />
    </div>
  );
};

export default FiverrIcon;
