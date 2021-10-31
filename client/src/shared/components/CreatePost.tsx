import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { toast } from 'react-toastify';
import { createPost as createPostApi } from '../api/auth';
import { Loader } from './Button';
import { useStateValue } from '../../store/stateProvider';

const CreatePost = () => {
  const [{ Doctor }, dispatch] = useStateValue();
  const [isEmergency, setIsEmergency] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isEmergency);
  const [input, setInput] = useState({
    title: '',
    category: '',
    location: '',
    description: '',
    isEmergency: false,
  });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await createPostApi({
        title: input.title,
        category: input.category,
        location: input.location,
        description: input.description,
        isEmergency: isEmergency,
      });
      toast.success('Story created successfully!');
    } catch (err: any) {
      toast.error(
        err.response.data.error ||
          err.response.data.message ||
          'Some error occured!'
      );
    }
    setIsLoading(false);
  };

  const handleEmergency = () => {
    setIsEmergency(!isEmergency);
  };

  return (
    <div className="px-4 mb-5 flex-col">
      <p className="mb-5 text-xl font-bold mt-8">Create Story</p>
      <input
        type="text"
        placeholder="Title"
        className="bg-lightpurple text-inputblue placeholder-primary w-full p-4 mb-5 rounded-xl"
        value={input.title}
        onChange={handleChange}
        name="title"
      />
      <div className="flex-col mb-12">
        <div className="flex mb-5 gap-7">
          <input
            type="text"
            placeholder="Category"
            className="bg-lightpurple text-inputblue placeholder-primary w-1/2 p-4 rounded-xl"
            value={input.category}
            onChange={handleChange}
            name="category"
          />
          <input
            type="text"
            placeholder="Location"
            className="bg-lightpurple text-inputblue placeholder-primary w-1/2 p-4 rounded-xl"
            value={input.location}
            onChange={handleChange}
            name="location"
          />
        </div>

        <textarea
          placeholder="Description"
          className="bg-lightpurple text-inputblue placeholder-primary rounded-xl w-full p-4 h-64"
          value={input.description}
          name="description"
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between items-start">
        <div
          className="flex cursor-pointer text-red-500 justify-center items-start"
          onClick={handleEmergency}
        >
          {isEmergency ? (
            <MdCheckBox color="#FF4B4B" size={32} />
          ) : (
            <MdCheckBoxOutlineBlank color="#FF4B4B" size={32} />
          )}
          <div className="flex flex-col">
            <p className="text-red ml-2.5 text-md">Emergency</p>
            <p className="ml-2.5 text-grey text-xs">
              Please use this carefully!
            </p>
          </div>
        </div>

        <button
          className="py-4 px-6 w-40 h-14 bg-darkpurple text-white text-base font-bold rounded-xl"
          onClick={onSubmit}
          disabled={isLoading}
        >
          <p>{isLoading ? <Loader /> : 'Create story'} </p>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
