import TipsCard from './TipsCard';

const TipsData = [
  {
    title: 'Grow your business with Seller Plus',
    description:
      'Check out all the tools and benefits that can help you scale your success',
  },
  {
    title: 'Attract new buyers with an intro video',
    description:
      'Connect with buyers by sharing who you are, what you do, and why they should work with you. Win over new clients in under a minute! ',
  },
  {
    title: 'Highlighting top clients on your profile',
    description: 'Increase customer confidence by sharing valuable clients. ',
  },

  {
    title: 'Add portfolio projects to your profile',
    description:
      'Gain customer trust by showcasing your skills and experience with past projects. ',
  },
  {
    title: 'Prep for the upcoming holiday',
    description:
      'Use our improved availability feature to let buyers know you’re taking time off—without impacting your rankings or performance. ',
  },
];

const TipsAndTricks = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-[#404161]">
        Welcome, ahadstylestar
      </h1>
      <p className="mb-3">
        Find important messages, tips, and links to helpful resources here:
      </p>
      {TipsData.map((item, ind) => (
        <TipsCard key={ind} title={item.title} description={item.description} />
      ))}
      <p className="text-[0.9rem] text-center underline text-gray-600 mt-4 mb-7 cursor-pointer">
        Show less
      </p>
    </div>
  );
};

export default TipsAndTricks;
