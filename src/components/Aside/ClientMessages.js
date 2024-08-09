import { Fragment } from 'react';
import Message from '../UI/Message';

const messagesData = [
  { id: 1, name: 'multizuri', lastTime: '23 hours ago', myReply: 'Ok' },
  {
    id: 2,
    name: 'Angelo',
    lastTime: '1 day ago',
    myReply: 'I will try to make this if...',
  },
  { id: 3, name: 'Max', lastTime: '3 days ago', myReply: "That's fine" },
  { id: 4, name: 'Edgar', lastTime: '1 week ago', myReply: "Thats' good" },
  {
    id: 5,
    name: 'Piper',
    lastTime: '2 months ago',
    myReply: 'Hope so we will work a...',
  },
];

const ClientMessages = () => {
  return (
    <Fragment>
      {messagesData.map((item) => (
        <Message
          key={item.id}
          name={item.name}
          lastTime={item.lastTime}
          myReply={item.myReply}
        />
      ))}
    </Fragment>
  );
};

export default ClientMessages;
