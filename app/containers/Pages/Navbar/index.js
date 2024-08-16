import { reactIcons } from '@/utils/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0A2C52] w-full px-5">
      <div className=" xl:container  h-[65.59px]  flex justify-between ">
        <div className="flex  items-center h-full gap-4">
          <div className="logo_contener top[12.82px] left[102px] gap-0">
            <img
              className="w-[39.94px] h-[39.94px] rounded-full"
              src="https://s3-alpha-sig.figma.com/img/1c76/65a5/c74d662ded0e63cabb5185a62c50be7e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OnMBeJ3JvJZrnthMX5yJRN92dOtSKcGnh9g4Zk5I8UhINSLXi7p-7VzZ5eWwTvMfbY-bSjEgfnwc3X8msRqwg~y6dVa2UHdhp1wt8xNBbo2MQj-9UJOZoFcWwUItDmkns7W1sOPP1LwmgYI5QaiuSWslULJ4HeBsGH5cGlklxj7b4zAOBM5Vy5bBti0uHNaySaq6mGjzFUF-jfOJ4h2~6k3ZJEzkLniKFI4jh9-HymO8x8OB7bSVVt7E6nxzE1TSgQ-8DqFSDgxWxKVTLXTiEOo2aYjfhtEFXY9rNOtB8kZYIoOsTxsp~WFOCxRK659zJs3YtsVcjnaFig-ammDErQ__"
              alt="Logo"
            />
          </div>
          <div className="flex text-[#FFFFFF] font-inter font-bold text-18">
            <h1>Discover Benefits of Kai-Zen® with Jane</h1>
            <h1 className="text-[#7592F2] underline  ml-2">
              <Link to="/">Learn More</Link>
            </h1>
          </div>
        </div>
        <div className="lg:flex items-center gap-4 text-white font-poppins hidden">
          <div className="flex items-center gap-2">
            <div className="call_contain bg-[#FFFFFF1A] p-3 rounded-full">
              {reactIcons.call}
            </div>
            <div>
              <h1>800-294-9940</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="call_contain bg-[#FFFFFF1A] p-3 rounded-full">
              {reactIcons.mail}
            </div>
            <div>
              <h1>support@abc.com</h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { LoginModal, MenuBar } from '@/components';
// import { isLoggedIn } from '@/utils/apiHandlers';
// import { navLinks } from '@/utils/constants';
// import { reactIcons } from '@/utils/icons';
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   // const [openRegisterModal, setRegisterModal] = useState(false);
//   const [openLoginModal, setLoginModal] = useState(false);
//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <>
//       <div className="py-10 container font-inter z-50">
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="w-28 h-10 text-white">
//               <img src="/images/logo.png" alt="" />
//             </div>
//           </div>

//           <div className="">
//             <ul className="hidden lg:flex items-center justify-between gap-5">
//               {navLinks.map((item, index) => (
//                 <NavLink
//                   to={item.path}
//                   className=" font-normal text-18 text-white"
//                   key={index}
//                 >
//                   {item.title}
//                 </NavLink>
//               ))}
//             </ul>
//           </div>
//           <div className="hidden md:flex gap-5">
//             {isLoggedIn() ? (
//               <button
//                 onClick={() => setLoginModal(true)}
//                 className="text-white"
//               >
//                 Logout
//               </button>
//             ) : (
//               <button
//                 onClick={() => setLoginModal(true)}
//                 className="text-white"
//               >
//                 Login
//               </button>
//             )}

//             <button className="blue-btn">800-342-445</button>
//           </div>
//           <div
//             onClick={() => setOpenMenu((prev) => !prev)}
//             className="flex lg:hidden items-center justify-center text-[40px] text-white"
//           >
//             {reactIcons.menu}
//           </div>
//         </div>
//       </div>
//       {openLoginModal && <LoginModal close={setLoginModal} />}
//       {openMenu && <MenuBar close={setOpenMenu} />}
//     </>
//   );
// };

// export default Navbar;
