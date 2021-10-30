import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import coins from '../../../assets/coins.png';
import Heading from '../Heading';
import ListItem from '../ListItem';

const Profile = () => {
  return (
    <div className='mt-16 px-4'>
      <div className='flex gap-16'>
        <div className='w-3/4 bg-blue-50 rounded-xl p-4'>
          <div className='w-full bg-gray-800 h-24 rounded-xl'></div>
          <img
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt=''
            className='h-20 w-20 rounded-xl object-cover transform -translate-y-1/2 ml-8'
          />
          <div className='ml-8 -mt-5 mb-5'>
            <p className='font-semibold text-xl'>Yaksh Chopra</p>
            <div className='flex items-center gap-2 text-gray-500 mt-2'>
              <IoLocationOutline />
              <span>Jammu</span>
            </div>
            <div className='flex items-center gap-2 text-gray-500 mt-2'>
              <MdOutlineHealthAndSafety />
              <span>Cardiologist</span>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-10'>
          <div className='w-full bg-blue-50 h-full rounded-xl flex items-center justify-center'>
            <img src={coins} className='h-28 -ml-5' alt='' />
            <div>
              <p className='font-medium text-xl'>1335 XP</p>
              <p className='text-gray-500'>Points</p>
            </div>
          </div>
          <div className='flex gap-10 h-full'>
            <div className=' w-full bg-cardPurple flex items-center justify-center text-center text-white rounded-xl'>
              <div>
                <p className='font-medium text-3xl'>35</p>
                <p className=''>Reports</p>
              </div>
            </div>
            <div className=' w-full bg-cardGreen flex items-center justify-center text-center text-white rounded-xl'>
              <div>
                <p className='font-medium text-3xl'>35</p>
                <p className=''>Posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Heading text='Your Recent Posts' />
        <div className='flex flex-col gap-2 mt-5'>
          <ListItem type='xl' />
          <ListItem type='xl' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
