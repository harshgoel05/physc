import React from "react";
import Navbar from "../../shared/components/Navbar/navbar";
import Search from "../../shared/components/Search";
import CreatePost from "../../shared/components/CreatePost";

const Post = () => {
  return (
    <div className="flex gap-12">
      <Navbar />
      <div className="h-screen w-full">
        <Search />
        <CreatePost />
      </div>

      <div className="h-screen w-2/4 bg-gray-50">right bar</div>
    </div>
  );
};

export default Post;
