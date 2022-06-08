const Random = (props) => {
  const random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return <div>{random}</div>;
};

export default Random;
