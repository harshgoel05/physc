import React from 'react';
import ListItem from '../ListItem';

const Explore = () => {
  return (
    <div className="mt-11">
      <p className="text-xl font-medium mb-9">Active Posts (Cardiology)</p>
      <ListItem type="xl" title="Stable Angina: Cath or not?" time="2" />
      <ListItem type="xl" title="One sided flank pain" time="2" />
      <ListItem type="xl" title="Frontier X ECG Monitor" time="5" />
      <ListItem type="xl" title="Almost a cardiac tampode" time="15" />
      <ListItem type="xl" title="Acute pericarditis" time="17" />
    </div>
  );
};

export default Explore;
