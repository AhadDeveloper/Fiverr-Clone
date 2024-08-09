import Aside from './Aside/Aside';
import Main from './Main/Main';

const MainContent = () => {
  return (
    <div className="w-full px-4 pt-6">
      <div className="grid grid-cols-4 gap-14">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default MainContent;
