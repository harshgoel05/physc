import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import Heading from './Heading';
import ListItem from './ListItem';
import { AiOutlinePlus } from 'react-icons/ai';
import Note from './Note';

const Rightbar = () => {
  const [list, setList] = useState([
    {
      title: 'Patient Notes',
      desc: '',
    },
  ]);

  const [add, setAdd] = useState(false);

  return (
    <>
      {add && <Note add={add} setAdd={setAdd} list={list} setList={setList} />}
      <div className="h-screen w-2/4">
        <div className="text-right text-xl pr-10 pt-4 mt-3 cursor-pointer text-blue-300">
          <BsBell className="ml-auto" />
        </div>
        <div className="mt-5">
          <Heading text="Trending Posts" />
          <div className="flex flex-col gap-2 mt-5 pr-10">
            <ListItem title="TTE question" />
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mr-12">
            <Heading text="Manuscripts" />
            <AiOutlinePlus
              className="text-xl cursor-pointer"
              onClick={() => setAdd(true)}
            />
          </div>

          <div className="flex flex-col gap-2 mt-5 pr-10">
            {list.map((item: any) => {
              return (
                <ListItem
                  type="manuscript"
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
