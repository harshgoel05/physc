import React from "react";

export default function Button({ title, onClick }: any) {
  return (
    <>
      <button
        title={title}
        className="w-102 h-16 uppercase bg-black rounded-xl text-white font-bold text-lg"
        onClick={onClick}
        type="button"
      >
        {title}
      </button>
    </>
  );
}
