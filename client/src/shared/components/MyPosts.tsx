import React from 'react';
import ListItem from './ListItem';

const MyPosts = () => {
  return (
    <div className="flex-col content-between">
      <div>
        <p className="font-medium text-xl mt-12 mb-8">Your Posts</p>
        <ListItem type="xl" />
        <ListItem type="xl" />
      </div>

      <div>
        <p className="font-medium text-xl mt-12 mb-8">Your Comments</p>
        <ListItem type="xl" />
        <ListItem type="xl" />
      </div>
    </div>
  );
};

export default MyPosts;
