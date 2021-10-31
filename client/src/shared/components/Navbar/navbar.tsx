import React from 'react';
import logo from '../../../assets/logo.png';
import ProfileImg from '../../../assets/profile.png';
import { MdAddBox } from 'react-icons/md';
import { BiCategory, BiLogOut } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';

export default function Navbar() {
  return (
    <div className="h-screen w-4/12 pt-8 pl-12 pr-16 flex-col content-end">
      <img src={logo} alt="logo" className="mb-12 h-10" />
      <div>
        <div className="flex cursor-pointer rounded-2xl bg-lightpurple text-darkpurple p-5 mb-10 ">
          <MdAddBox className="text-4xl mr-3.5" />
          <p className="font-sans text-sm font-medium">
            Create <br /> new post
          </p>
        </div>

        <div className="flex cursor-pointer text-darkpurple gap-4 items-center mb-8">
          <BiCategory className="text-2xl" />
          <p className="font-sans text-sm  font-medium"> Dashboard</p>
        </div>

        <div className="flex cursor-pointer text-textmain gap-4 items-center mb-8">
          <HiOutlineUserGroup className="text-2xl" />
          <p className="font-sans text-sm  font-medium"> Community</p>
        </div>

        <div className="flex cursor-pointer text-textmain gap-4 items-center mb-8">
          <BiLogOut className="text-2xl" />
          <p className="font-sans text-sm  font-medium"> Sign Out </p>
        </div>
      </div>

      <div className="flex gap-2 absolute bottom-10">
        <div bg-faintpurple className="rounded-full ">
          <img alt="profile img" src={ProfileImg} />
        </div>
        <div>
          <p className=" font-sans font-medium"> Yaksh</p>
          <p className=" font-sans text-base text-textmain"> Cardiologist</p>
        </div>
      </div>
    </div>
  );
}
