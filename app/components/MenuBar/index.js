import { navLinks } from '@/utils/constants';
import { reactIcons } from '@/utils/icons';
import React from 'react';
import PropTypes from 'prop-types';

const MenuBar = ({ close }) => {
  const loggedIn = true;
  return (
    <div className="h-screen  bg-[black] backdrop-blur-sm bg-opacity-80 fixed top-0 z-[50] w-[85%] shadow-primary  rounded-tr-20">
      <div className="flex justify-end my-2 mx-2">
        <div
          onClick={() => close(false)}
          className="p-2 flex-center w-12 h-12 bg-primary-300 rounded-full "
        >
          <span className="text-2xl">{reactIcons.longLeft}</span>
        </div>
      </div>

      <div className="w-full px-4 flex-center flex-col my-14">
        {loggedIn ? (
          <div className="flex-center gap-5 mb-10">
            <button className="blue-btn hidden sm:block">Get Insurance</button>
            <div className="flex-center gap-4">
              <img
                className="h-7 w-7 object-cover bg-gray-200 rounded-full"
                src="/images/Home3/one.png"
                alt=""
              />
              <p className="head-24 text-white">Deendayal Dhakad</p>
            </div>
          </div>
        ) : (
          <div className="flex-center flex-col gap-3 mb-5">
            <button className="blue-btn w-full">Login</button>
            <button className="gray-btn w-full">800-342-445</button>
          </div>
        )}

        <ul className="flex-center flex-col gap-2 w-full">
          {navLinks.map((item, index) => (
            <li
              className="bg-[#EDF6FF] py-2  text-black w-full text-center rounded-[50px] para-18"
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
MenuBar.propTypes = {
  close: PropTypes.func.isRequired,
};
export default MenuBar;
