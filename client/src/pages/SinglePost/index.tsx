import React from 'react';
import Navbar from '../../shared/components/Navbar/navbar';
import Search from '../../shared/components/Search';
import Rightbar from '../../shared/components/Rightbar';
import PostBody from '../../shared/components/PostBody';

const Post = () => {
  return (
    <div className="flex gap-12">
      <Navbar />
      <div className="h-screen w-full">
        <Search />
        <PostBody />
      </div>
 
      <Rightbar />
    </div>
  );
};

export default Post;
