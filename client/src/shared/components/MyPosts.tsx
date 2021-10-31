import React from 'react';
import ListItem from './ListItem';

import { useStateValue } from '../../store/stateProvider';

const MyPosts = () => {
  const [{ Doctor }, dispatch] = useStateValue();
  return (
    <div className="flex-col content-between">
      <div>
        <p className="font-medium text-xl mt-12 mb-8">Your Posts</p>
        {Doctor.posts.map((post: any) => {
          return <ListItem type="xl" title={post.title} time={post.time} />;
        })}
      </div>

      <div>
        <p className="font-medium text-xl mt-12 mb-8">Your Comments</p>
        {Doctor.comments.map((comment: any) => {
          return (
            <ListItem type="xl" title={comment.title} time={comment.time} />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
