import React from 'react';

const Rating = (props) => {
  const fullstartCount = Math.round(Number(props.children));
  const emptyStarCount = 5 - fullstartCount;
  return <div>{'⭐'.repeat(fullstartCount)}</div>;
};

export default Rating;
