import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import blur from '../../assets/blur.png';
import card from '../../assets/card.png';

import { useHistory } from 'react-router';

const Register = () => {
  let history = useHistory();

  const [data, setData] = useState({
    name: '',
    email: '',
    id: '',
    password: '',
  });
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
                value={data.name}
                onChange={(e: any) =>
                  setData({ ...data, name: e?.target?.value })
                }
              />
              <input
                placeholder="Email"
                className="outline-none border-b p-2 w-full mt-8"
                type="email"
                value={data.email}
                onChange={(e: any) =>
                  setData({ ...data, email: e?.target?.value })
                }
              />
              <input
                placeholder="Liscence ID"
                className="outline-none border-b p-2 w-full mt-8"
                value={data.id}
                onChange={(e: any) =>
                  setData({ ...data, id: e?.target?.value })
                }
              />
              <input
                placeholder="Password"
                className="outline-none border-b p-2 w-full mt-8"
                type="password"
                value={data.password}
                onChange={(e: any) =>
                  setData({ ...data, password: e?.target?.value })
                }
              />
              <p
                className="bg-darkpurple w-full text-white rounded-lg mt-12 text-center py-3 cursor-pointer"
                onClick={() => console.log(data)}
              >
                Create Account
              </p>
              <p className="text-gray-500 mt-8">
                Already registered?{' '}
                <span
                  className="text-darkpurple cursor-pointer"
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  Login
                </span>
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
