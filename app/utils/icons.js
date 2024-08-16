import React from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowDownLong,
  FaCheck,
} from 'react-icons/fa6';
import { FaAngleDown, FaArrowLeft } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdOutlineLock, MdOutlineLockOpen } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

export const reactIcons = {
  mail: <MdOutlineEmail />,
  call: <IoCallOutline />,
  shortLeft: <FaAngleLeft />,
  shortRight: <FaAngleRight />,
  shortDown: <FaAngleDown />,
  modalClose: <RxCross1 />,
  hamburger: <CgMenuLeftAlt />,
  notification: <IoMdNotificationsOutline />,
  check: <FaCheck />,
  longDown: <FaArrowDownLong />,
  menu: <CgMenuRightAlt />,
  longLeft: <FaArrowLeft />,
  lock: <MdOutlineLock />,
  unlock: <MdOutlineLockOpen />,
};
