import React from 'react';
import { BsBell } from 'react-icons/bs';
import Heading from './Heading';
import ListItem from './ListItem';

const Rightbar = () => {
  return (
    <div className='h-screen w-2/4'>
      <div className='text-right text-xl pr-10 pt-4 mt-3 cursor-pointer text-blue-300'>
        <BsBell className='ml-auto' />
      </div>
      <div className='mt-5'>
        <Heading text='Trending Posts' />
        <div className='flex flex-col gap-2 mt-5 pr-10'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>

      <div className='mt-5'>
        <Heading text='Manuscripts' />
        <div className='flex flex-col gap-2 mt-5 pr-10'>
          <ListItem type='manuscripts' />
          <ListItem type='manuscripts' />
          <ListItem type='manuscripts' />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
