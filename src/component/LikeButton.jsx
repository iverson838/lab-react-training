import { useState } from 'react';

const LikeButton = (props) => {
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [count, setCount] = useState(0);

  const color = colorArr[count % colorArr.length];

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
