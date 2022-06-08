import React from 'react';

const DriverCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} width={32} />
      <span>
        {props.car.model}-{props.car.licensePlate}
      </span>
    </div>
  );
};

export default DriverCard;
