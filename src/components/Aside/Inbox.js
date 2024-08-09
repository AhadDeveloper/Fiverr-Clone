import Card from '../UI/Card';

const Inbox = () => {
  return (
    <Card mb="mb-0" newClass="border-b-2">
      <div className="flex justify-between">
        <p className="text-[#62646A]">Inbox</p>
        <p className="text-[#327ee7] underline cursor-pointer">View All</p>
      </div>
    </Card>
  );
};

export default Inbox;
