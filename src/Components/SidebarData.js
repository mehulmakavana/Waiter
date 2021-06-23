import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as  RiTableFill from 'react-icons/ri';
import * as  BiFoodMenu from 'react-icons/bi';

export const SidebarData = [

  {
    title: 'List Of Table',
    path: '/ListTable',
    icon: <RiTableFill.RiTableFill/>,
    cName: 'nav-text'
  },

  {
    title: 'Menu',
    path: '/Menu',
    icon: <BiFoodMenu.BiFoodMenu />,
    cName: 'nav-text'
  },

  {
    title: 'Cart',
    path: '/Cart',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  // {
  //   title: 'Reservation',
  //   path: '/Reservation',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },

  // {
  //   title: 'BookTable',
  //   path: '/BookTable',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },

  {
    title: 'Create Complaints',
    path: '/CreateComplaints',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },

  {
    title: 'Super Admin',
    path: '/SuperAdmin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

]