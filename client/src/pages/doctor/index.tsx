import React from 'react';
import Heading from '../../shared/components/Heading';
import Search from '../../shared/components/Search';

const Dashboard = () => {
  return (
    <div className='flex gap-12'>
      <div className='h-screen w-4/12 bg-gray-50'>Side bar</div>
      <div className='h-screen w-full'>
        <Search />

        {/* Navbar */}
        <div className='flex gap-8 px-4 text-gray-500'>
          <span className='cursor-pointer relative text-black font-semibold'>
            Info
            <div className='absolute h-1 w-3/4 bg-blue-700 -bottom-1 rounded-full'></div>
          </span>
          <span className='cursor-pointer'>Profile</span>
          <span className='cursor-pointer'>Explore</span>
        </div>
        {/* navbar end */}

        {/* Cards */}
        <div className='flex gap-10 px-4 mt-8'>
          <div className='w-full h-44 bg-blue-700 rounded-xl'></div>
          <div className='w-full h-44 bg-blue-700 rounded-xl'></div>
          <div className='w-full h-44 bg-blue-700 rounded-xl'></div>
          <div className='w-full h-44 bg-blue-700 rounded-xl'></div>
        </div>
        {/* Cards end */}
        <div className='px-4 mt-10'>
          <Heading text='Emergencies' />
        </div>
      </div>
      <div className='h-screen w-2/4 bg-gray-50'>right bar</div>
    </div>
  );
};

export default Dashboard;
