import React, { useState } from 'react';

const Note = (props: any) => {
  const [data, setData] = useState({
    title: '',
    desc: '',
  });

  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-50 fade flex items-center justify-center">
      <div className="bg-white w-96 p-8">
        <input
          placeholder="Add manuscript title"
          className="outline-none text-xl w-full"
          value={data.title}
          onChange={(e: any) => setData({ ...data, title: e?.target?.value })}
        />
        <textarea
          placeholder="Add description"
          className="w-full h-64 rounded-lg p-4 mt-5 outline-none bg-blue-50"
          value={data.desc}
          onChange={(e: any) => setData({ ...data, desc: e?.target?.value })}
        ></textarea>
        <div className="flex gap-5 mt-5">
          <p
            className="bg-lightpurple w-full text-darkpurple font-bold rounded-lg text-center py-3 cursor-pointer"
            onClick={() => {
              setData({
                title: '',
                desc: '',
              });
              props.setAdd(false);
            }}
          >
            Discard
          </p>
          <p
            className="bg-darkpurple w-full text-white rounded-lg text-center py-3 cursor-pointer"
            onClick={() => {
              props.setList([...props.list, data]);
              props.setAdd(false);
            }}
          >
            Save
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note;
