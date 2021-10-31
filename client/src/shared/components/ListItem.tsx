import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { IoDocumentTextOutline } from 'react-icons/io5';

const ListItem = (props: any) => {
  return (
    <div className=" flex items-center justify-between py-3 cursor-pointer hover:bg-blue-50 px-3">
      <div className="flex gap-4 items-center">
        {props.type !== 'manuscript' ? (
          <div className="bg-blue-700 rounded-full h-10 w-10 object-fill overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="absolute h-full w-full object-cover"
            />
          </div>
        ) : (
          <IoDocumentTextOutline className="text-4xl" />
        )}

        <div className="">
          <p className="text-semibold">{props.title}</p>
          <p className="text-gray-400 text-xs">31st Oct'2021</p>
        </div>
      </div>

      {/* icons */}
      {props.type === 'xl' && (
        <div className="flex gap-2 text-gray-400 items-center">
          <BiTimeFive />
          <span>2 hrs</span>
        </div>
      )}

      <div>
        <MdOutlineNavigateNext />
      </div>
    </div>
  );
};

export default ListItem;
