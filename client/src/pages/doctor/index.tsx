import React, { useState } from 'react';
import Heading from '../../shared/components/Heading';
import Navbar from '../../shared/components/Navbar/navbar';
import Search from '../../shared/components/Search';

import ListItem from '../../shared/components/ListItem';
import Rightbar from '../../shared/components/Rightbar';
import Info from '../../shared/components/Doctor/Info';
import Profile from '../../shared/components/Doctor/Profile';
import Explore from '../../shared/components/Doctor/Explore';

const Dashboard = () => {
  const [active, setActive] = useState('info');

  return (
    <div className="flex gap-12">
      <Navbar />
      <div className="h-screen w-full">
        <Search />

        {/* Navbar */}
        <div className="flex gap-8 px-4 text-gray-500">
          <span
            className={`cursor-pointer relative text-black ${
              active === 'info' && 'font-semibold'
            }`}
            onClick={() => setActive('info')}
          >
            Info
            {active === 'info' && (
              <div className="absolute h-1 w-3/4 bg-blue-700 -bottom-1 rounded-full"></div>
            )}
          </span>
          <span
            className={`cursor-pointer relative text-black ${
              active === 'profile' && 'font-semibold'
            }`}
            onClick={() => setActive('profile')}
          >
            Profile
            {active === 'profile' && (
              <div className="absolute h-1 w-3/4 bg-blue-700 -bottom-1 rounded-full"></div>
            )}
          </span>
          <span
            className={`cursor-pointer relative text-black ${
              active === 'explore' && 'font-semibold'
            }`}
            onClick={() => setActive('explore')}
          >
            Explore
            {active === 'explore' && (
              <div className="absolute h-1 w-3/4 bg-blue-700 -bottom-1 rounded-full"></div>
            )}
          </span>
        </div>
        {/* navbar end */}

        {active === 'info' && <Info />}
        {active === 'profile' && <Profile />}
        {active === 'explore' && <Explore />}
      </div>
      <Rightbar />
    </div>
  );
};

export default Dashboard;
