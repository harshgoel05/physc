import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import Comment from './Comment';
//GoLocation

const PostBody = () => {
  return (
    <div className="px-4">
      <p className="font-medium text-xl mb-6">TTE question</p>

      <div className="flex items-center justify-between mb-7">
        <div className="flex">
          <div className="flex mr-5  items-center">
            <FaRegUser className="text-2xl mr-2.5 text-inputblue " />
            <p className="text-inputblue font-medium text-sm"> Yaksh Chopra </p>
          </div>
          <div className="flex item-center">
            <GoLocation className="text-2xl mr-2.5 text-inputblue" />
            <p className="text-inputblue font-medium text-sm"> Jammu, India</p>
          </div>
        </div>

        <div className="py-1.5 px-5 bg-lime rounded-xl">
          <p className="text-darklime font-medium text-xs"> Cardiology </p>
        </div>
      </div>

      <p className="text-base text-postgrey">
        What is the difference between the EF via the Teichholz method vs the EF
        reported at the bottom of the study. In the hospital on our patients
        (I'm a general IM resident in the US rn), we're typically looking for
        systolic dysfunction and what the EF is + any valvular pathologies +
        diastolic dysfunction. But the more I read echo reports now the more I'm
        noticing in the detailed readings it shows an EF from the Teichholz EF
        and it's always quite a bit lower than the EF that is reported. Why is
        that? Obviously it has to do with the method of measurement, but is the
        actual EF the one reported at the summary? I've seen the two differences
        being like, 15-20 % points.
      </p>

      <Comment
        up="5"
        down="0"
        name="Andrew King"
        comment="I am a radiologist who did cardiac radiology for many years. I got somewhat obsessed with the various EF measurement methods. I did not really do echo, though, in clinical practice."
      />
      <Comment
        up="3"
        down="0"
        name="Dr. Harish Bhatt"
        comment="Teich method is an outdated measure."
      />
    </div>
  );
};

export default PostBody;
