import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import Comment from './Comment';
//GoLocation

const PostBody = () => {
  return (
    <div className="px-4">
      <p className="font-medium text-xl mb-6">Pulmunary Maliganat Tumour</p>

      <div className="flex items-center justify-between mb-7">
        <div className="flex">
          <div className="flex mr-5  items-center">
            <FaRegUser className="text-2xl mr-2.5 text-inputblue " />
            <p className="text-inputblue font-medium text-sm"> Yaksh Chopra </p>
          </div>
          <div className="flex item-center">
            <GoLocation className="text-2xl mr-2.5 text-inputblue" />
            <p className="text-inputblue font-medium text-sm"> Jammu, India</p>
          </div>
        </div>

        <div className="py-1.5 px-5 bg-lime rounded-xl">
          <p className="text-darklime font-medium text-xs"> Cardiology </p>
        </div>
      </div>

      <p className="text-base text-postgrey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        ullamcorper laoreet lorem at ornare. Sed rutrum diam et purus hendrerit,
        id vehicula sem bibendum. Duis quis mollis eros. Sed semper scelerisque
        nunc. Aenean non dui nec massa volutpat tristique. Integer vel cursus
        nisl.
      </p>

      <Comment />
      <Comment />
    </div>
  );
};

export default PostBody;
