import React, { useState } from 'react';
import FileImg from '../../assets/file.png';
import ListItem from './ListItem';

const Patients = () => {
  const [input, setInput] = useState({ patient: '' });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  return (
    <div>
      <div className="py-7 px-10 bg-darkpurple rounded-2xl flex justify-end mt-20 relative mb-14 ">
        <input
          className="py-3.5 pl-5 bg-inputpurple text-white text-base placeholder-secondary rounded-xl w-2/3"
          placeholder="Search for patients"
          value={input.patient}
          name="patient"
          onChange={handleChange}
        />
        <img
          src={FileImg}
          alt="Patient report graphic"
          className="absolute inset-0 -top-14"
        />
      </div>

      <p className="text-xl font-medium mb-8">Patient History</p>
      <ListItem type="xl" />
      <ListItem type="xl" />
      <ListItem type="xl" />
    </div>
  );
};

export default Patients;
