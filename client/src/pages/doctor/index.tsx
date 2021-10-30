import React from 'react';
import Navbar from '../../shared/components/Navbar/navbar';
import Search from '../../shared/components/Search';
import CreatePost from '../../shared/components/CreatePost'

const Dashboard = () => {
  return (
    <div className='flex gap-12'>
      <Navbar />
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
         <CreatePost />  
      </div>
     
      <div className='h-screen w-2/4 bg-gray-50'>right bar</div>
    </div>
  );
};



export default Dashboard;
