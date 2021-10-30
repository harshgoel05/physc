import React from 'react';
import dashboard1 from '../../../assets/dashboard1.svg';
import dashboard2 from '../../../assets/dashboard2.svg';
import dashboard3 from '../../../assets/dashboard3.svg';
import Heading from '../Heading';
import ListItem from '../ListItem';

const Info = ({ activeProp, setActive }: any) => {
  return (
    <>
      <div className="flex gap-14 w-10/12 px-4 mt-8 text-center">
        <div className="w-full h-52 flex items-center justify-center bg-reports cursor-pointer rounded-xl pt-6">
          <div
            className="-mt-6"
            onClick={() => {
              setActive('reports');
            }}
          >
            <img src={dashboard1} className="w-16 mx-auto" alt="" />
            <p className="font-semibold text-sm mt-5">Reports</p>
            <p className="text-xs text-gray-400 mt-1">5 pending</p>
          </div>
        </div>
        <div
          className="w-full h-52 bg-myposts flex items-center justify-center cursor-pointer rounded-xl pt-6"
          onClick={() => {
            setActive('posts');
          }}
        >
          <div className="-mt-6">
            <img src={dashboard2} className="w-16 mx-auto" alt="" />
            <p className="font-semibold text-sm mt-5">My Posts</p>
            <p className="text-xs text-gray-400 mt-1">8 new likes</p>
          </div>
        </div>
        <div
          className="w-full h-52 bg-patient flex items-center justify-center cursor-pointer rounded-xl pt-6"
          onClick={() => {
            setActive('patients');
          }}
        >
          <div className="-mt-6">
            <img src={dashboard3} className="w-16 mx-auto" alt="" />
            <p className="font-semibold text-sm mt-5">Find Patients</p>
            <p className="text-xs text-gray-400 mt-1">1335 members</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-10">
        <Heading text="Emergencies" />
        <div className="flex flex-col gap-2 mt-5">
          <ListItem type="xl" />
          <ListItem type="xl" />
          <ListItem type="xl" />
          <ListItem type="xl" />
        </div>
      </div>
    </>
  );
};

export default Info;
