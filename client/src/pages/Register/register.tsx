import React from 'react';
import logo from '../../assets/logo.png';
import blur from '../../assets/blur.png';
import card from '../../assets/card.png';

const Register = () => {
  return (
    <div>
      <img src={logo} className=" h-8 fixed top-8 left-8" alt="" />
      <div className="flex p-4 h-screen overflow-hidden">
        <div className="w-full flex items-center justify-center">
          <div className="w-5/12 -ml-8">
            <p className=" text-2xl font-bold">Create new account</p>
            <div className="w-full mt-10">
              <input
                placeholder="Full Name"
                className="outline-none border-b p-2 w-full"
              />
              <input
                placeholder="Email"
                className="outline-none border-b p-2 w-full mt-8"
                type="email"
              />
              <input
                placeholder="Liscence ID"
                className="outline-none border-b p-2 w-full mt-8"
              />
              <input
                placeholder="Password"
                className="outline-none border-b p-2 w-full mt-8"
                type="password"
              />
              <p className="bg-darkpurple w-full text-white rounded-lg mt-12 text-center py-3 cursor-pointer">
                Create Account
              </p>
              <p className="text-gray-500 mt-8">
                Already registered?{' '}
                <span className="text-darkpurple cursor-pointer">Login</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-2/4 bg-blue-50 flex items-center rounded-r-xl relative">
          <img
            src={blur}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <img
            src={card}
            className="rounded-xl w-full transform -translate-x-36"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
