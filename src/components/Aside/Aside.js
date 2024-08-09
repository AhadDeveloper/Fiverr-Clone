import EarningCard from './EarningCard';
import ProfileCard from './ProfileCard';
import Inbox from './Inbox';
import ClientMessages from './ClientMessages';

const Aside = () => {
  return (
    <div>
      <ProfileCard />
      <EarningCard />
      <Inbox />
      <ClientMessages />
    </div>
  );
};

export default Aside;
