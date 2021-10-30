import React from 'react';
import Heading from '../../shared/components/Heading';
import Navbar from '../../shared/components/Navbar/navbar';
import Search from '../../shared/components/Search';
import dashboard1 from '../../assets/dashboard1.svg';
import dashboard2 from '../../assets/dashboard2.svg';
import dashboard3 from '../../assets/dashboard3.svg';
import ListItem from '../../shared/components/ListItem';
import Rightbar from '../../shared/components/Rightbar';

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

        {/* Cards */}
        <div className='flex gap-14 w-10/12 px-4 mt-8 text-center'>
          <div className='w-full h-52 flex items-center justify-center bg-blue-100 cursor-pointer rounded-xl pt-6'>
            <div className='-mt-6'>
              <img src={dashboard1} className='w-16 mx-auto' alt='' />
              <p className='font-semibold text-sm mt-5'>Reports</p>
              <p className='text-xs text-gray-400 mt-1'>5 pending</p>
            </div>
          </div>
          <div className='w-full h-52 bg-green-100 flex items-center justify-center cursor-pointer rounded-xl pt-6'>
            <div className='-mt-6'>
              <img src={dashboard2} className='w-16 mx-auto' alt='' />
              <p className='font-semibold text-sm mt-5'>My Posts</p>
              <p className='text-xs text-gray-400 mt-1'>8 new likes</p>
            </div>
          </div>
          <div className='w-full h-52 bg-red-100 flex items-center justify-center cursor-pointer rounded-xl pt-6'>
            <div className='-mt-6'>
              <img src={dashboard3} className='w-16 mx-auto' alt='' />
              <p className='font-semibold text-sm mt-5'>Find Patients</p>
              <p className='text-xs text-gray-400 mt-1'>1335 members</p>
            </div>
          </div>
        </div>
        {/* Cards end */}
        <div className='px-4 mt-10'>
          <Heading text='Emergencies' />
          <div className='flex flex-col gap-2 mt-5'>
            <ListItem type='xl' />
            <ListItem type='xl' />
            <ListItem type='xl' />
            <ListItem type='xl' />
          </div>
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Dashboard


