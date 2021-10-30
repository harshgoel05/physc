
import React from "react";
import Logo from "../../../assets/logowhite.png";
import ProfileImg from "../../../assets/profile.png";
import {MdAddBox} from 'react-icons/md';
import {BiCategory, BiLogOut} from 'react-icons/bi';
import {HiOutlineUserGroup} from 'react-icons/hi';



export default function Navbar() {
  return (
    
    <div className="bg-novelblue h-screen w-4/12 pt-8 pl-12 pr-24 flex-col content-end">
    <div>
   
        <img src={Logo} className="mb-12" />

        <div className="flex cursor-pointer rounded-2xl bg-faintpurple text-darkpurple p-5 mb-10 w-4/6">
             <MdAddBox size={40} className="mr-3.5"/> 
             <p className="font-sans text-sm text-white font-medium"> Create <br /> new post</p>
        </div>

        <div className="flex cursor-pointer text-darkpurple gap-4 items-center mb-10">
            <BiCategory size={40}/>
            <p className="font-sans text-sm  font-medium"> Dashboard</p>
        </div>

        <div className="flex cursor-pointer text-textmain gap-4 items-center mb-10">
            <HiOutlineUserGroup size={40}/>
            <p className="font-sans text-sm  font-medium"> Community</p>
        </div>

        <div className="flex cursor-pointer text-textmain gap-4 items-center mb-10">
            <BiLogOut size={40} />
            <p className="font-sans text-sm  font-medium"> Sign Out </p>
        </div>

    </div>
     
     <div className="flex gap-2">
         <div bg-faintpurple className="rounded-full ">
            <img src={ProfileImg}/>
         </div>
         <div>
             <p className=" font-sans text-xl font-medium text-textmain"> Yaksh</p>
             <p className=" font-sans text-base text-textmain"> Cardiologist</p>
         </div>
     </div>

    </div>
     
      
    
  );
}
