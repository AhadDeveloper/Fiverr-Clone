import FiverrLogo from '../../assets/fiverr-2.svg';
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaTiktok,
  FaPinterestSquare,
} from 'react-icons/fa';

import FooterCard from './FooterCard';

const footerData = [
  {
    id: 1,
    title: 'Categories',
    allItems: [
      'Graphics & Design',
      'Digital Marketing',
      'Writing & Translation',
      'Video & Animation',
      'Music & Audio',
      'Fiverr Logo Maker',
      'Programming & Tech',
      'Data',
      'Business',
      'Photography',
      'End-to-End Projects',
      'Sitemap',
    ],
  },
  {
    id: 2,
    title: 'About',
    allItems: [
      'Careers',
      'Press & News',
      'Partnerships',
      'Privacy Policy',
      'Terms of Service',
      'Intellectual Property Claims',
      'Investor Relations',
    ],
  },
  {
    id: 3,
    title: 'Support and Education',
    allItems: [
      'Help & Support',
      'Trust & Safety',
      'Quality Guide',
      'Selling on Fiverr',
      'Buying on Fiverr',
      'Fiverr Guides',
      'Learn',
    ],
  },
  {
    id: 4,
    title: 'Community',
    allItems: [
      'Customer Success Stories',
      'Community Hub',
      'Forum',
      'Events',
      'Blog',
      'Creators',
      'Affiliates',
      'Podcast',
      'Invite a Friend',
      'Become a Seller',
      'Community Standards',
    ],
  },
  {
    id: 4,
    title: 'Business Solutions',
    allItems: [
      'About Business Solutions',
      'Fiverr Pro',
      'Fiverr Certified',
      'Become an Agency',
      'Fiverr Enterprise',
      'ClearVoice',
      'Content Marketing',
      'Working Not Working',
      'Contact Sales',
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-white mt-8">
      <div className="grid grid-cols-5 gap-9 px-6 pt-16 pb-7">
        {footerData.map((element) => (
          <FooterCard
            key={element.id}
            title={element.title}
            allItems={element.allItems}
          />
        ))}
      </div>
      <div className="px-6 py-8 border-t grid grid-cols-3 text-gray-500">
        <div className="flex col-span-2">
          <img className="w-20" src={FiverrLogo} alt="fiverr logo" />
          <p className="ml-6">&copy; Fiverr International Ltd. 2024</p>
        </div>
        <div className="flex justify-between">
          <FaTiktok size={25} />
          <FaInstagramSquare size={25} />
          <FaLinkedin size={25} />
          <FaFacebookSquare size={25} />
          <FaPinterestSquare size={25} />
          <FaTwitterSquare size={25} />
          <p>English</p>
          <p>PKR</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
