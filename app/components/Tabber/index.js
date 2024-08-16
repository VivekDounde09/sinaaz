import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const tabLinks = [
  {
    title: '1.Introduction',
    path: '/intro',
  },
  {
    title: '2.Calculate your Needs',
    path: '/calculate-need',
  },
  {
    title: '3.Create Kai-zen',
    path: '/create',
  },
  {
    title: '4.Financial Solution',
    path: '/financial',
  },
  {
    title: '5.How it Works',
    path: '/how-it-works',
  },
  {
    title: '6.Plan Details',
    path: '/plan-details',
  },
];

const Tabber = () => {
  const location = useLocation();

  const matchRoute = (route) => {
    if (location.pathname === route) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="flex items-center mx-auto w-full my-10">
      <div className="flex items-center mx-auto overflow-x-auto">
        {tabLinks.map((item, index) => (
          <div
            key={index}
            className={`${
              matchRoute(item.path) ? 'border-[#2B53D6]' : 'border-gray-200'
            } border-b-[7px]  py-2 flex-none `}
          >
            <Link
              to={item.path}
              className={`${
                matchRoute(item.path) ? 'text-[#2B53D6]' : 'text-[#575757]'
              } px-2 `}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabber;
