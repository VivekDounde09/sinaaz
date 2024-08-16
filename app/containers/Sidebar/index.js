import { reactIcons } from '@/utils/icons';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavbarTwo } from '../pageListAsync';

const sidebarLinks = [
  {
    id: 1,
    head: 'Introduction',
    links: [
      { title: 'Introduction to Course', path: '/' },
      { title: 'What is Kai-Zen®?', path: '/' },
      { title: 'Estimate  My Benefits', path: '/' },
    ],
  },
  {
    id: 2,
    head: 'What are Financial Solutions?',
    links: [
      { title: 'Solution 1', path: '/' },
      { title: 'Solution 2', path: '/' },
      { title: 'Solution 3', path: '/' },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-[240px] flex flex-col  px-[10px] py-7">
        <div className="w-[130px] mb-5 mx-auto">
          <img src="/images/top.png" alt="" />
        </div>
        <div className="border-y border-[#EDEAEA] py-5 w-full px-5">
          <div className="h-3 w-full bg-green-500 rounded-full my-3"></div>
          <p className="font-inter text-12 text-[#272D39]">0 % Complete</p>
        </div>

        <div className="">
          {sidebarLinks.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <h2 className="font-inter font-semibold text-14 text-[#12171B] my-5 px-2">
                  {item.head}
                </h2>
                <button
                  className={`ay-center -right-1 text-lg ${'rotate-180'}`}
                >
                  {reactIcons.shortDown}
                </button>
              </div>

              <div className="pb-5 border-b border-[#EDEAEA]">
                {item.links.map((link, i) => (
                  <NavLink
                    to={link.path}
                    key={i}
                    className="flex items-center gap-4 py-3 bg-primary-300 mb-1 rounded-lg px-3"
                  >
                    <span className="text-xl">{reactIcons.hamburger}</span>
                    <p className="text-14 font-outfit text-[#12171B]">
                      {link.title}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-primary-300 ">
        <NavbarTwo />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
