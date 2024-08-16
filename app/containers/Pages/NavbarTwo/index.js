import React from 'react';
import { Link } from 'react-router-dom';

const NavbarTwo = () => {
  return (
    <div className="py-4 px-7 bg-white border-primary flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link to={'/'} className="w-[70px]">
          <img src="/images/logo2.png" alt="" />
        </Link>
        <div className="hidden lg:block">
          <input
            className="border border-[#EBEBEB] bg-primary-300 outline-none rounded-[50px] text-14 py-2 px-8"
            type="text"
            placeholder="search"
          />
        </div>
      </div>

      <div className="flex-center gap-5">
        <button className="blue-btn hidden sm:block">Get Insurance</button>
        <div className="flex-center gap-4">
          <img
            className="h-7 w-7 object-cover bg-gray-200 rounded-full"
            src="/images/Home3/one.png"
            alt=""
          />
          <p>Deendayal Dhakad</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
