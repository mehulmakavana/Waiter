import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [

  {
    title: 'List Of Table',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Pending Order',
    path: '/PendingOrder',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Done Order',
    path: '/DoneOrder',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },


  {
    title: 'User Complaints',
    path: '/Complaints',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
    

]