import React from 'react';
import Navbar from '../../shared/components/Navbar/navbar';
import Search from '../../shared/components/Search';
import CreatePost from '../../shared/components/CreatePost';
import Rightbar from '../../shared/components/Rightbar';

const Post = () => {
  return (
    <div className="flex gap-12">
      <Navbar />
      <div className="h-screen w-full">
        <Search />
        <CreatePost />
      </div>

      <Rightbar />
    </div>
  );
};

export default Post;
