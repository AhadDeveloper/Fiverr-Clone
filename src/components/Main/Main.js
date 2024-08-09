import TipsAndTricks from './TipsAndTricks';
import ActiveOrders from './ActiveOrders';
import TopSellerSteps from './TopSellerSteps';

const Main = () => {
  return (
    <div className="col-span-3">
      <TipsAndTricks />
      <ActiveOrders />
      <TopSellerSteps />
    </div>
  );
};

export default Main;
