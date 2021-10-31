import React from 'react';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdThumbDown } from 'react-icons/md';
import { MdThumbUp } from 'react-icons/md';

const Comment = (props: any) => {
  return (
    <div className="mt-8">
      <div className=" p-6 mb-4 rounded-2xl bg-lightpurple">
        <p className="font-base text-darkpurple">{props.comment}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex mr-5  items-center">
          <HiOutlineUserGroup className="text-2xl mr-2.5 text-inputblue " />
          <p className="text-inputblue font-medium text-sm"> {props.name}</p>
        </div>

        <div className="flex gap-9">
          <div className="flex">
            <MdThumbUp className="text-2xl mr-2.5 text-inputblue" />
            <p className="text-inputblue font-medium text-sm"> {props.up} </p>
          </div>
          <div className="flex">
            <MdThumbDown className="text-2xl mr-2.5 text-inputblue" />
            <p className="text-inputblue font-medium text-sm"> {props.down} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
