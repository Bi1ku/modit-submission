import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import MeteorShower from './MeteorShower';
import Navbar from './Navbar';

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className='font-mono bg-gray-900 px-10 relative'>
      <Navbar />
      <MeteorShower />
      <div className='star' />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
