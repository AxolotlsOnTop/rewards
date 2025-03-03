import React from 'react';
import './StampCard.css';
import starFilled from '../src/assets/star-filled.svg';
import starUnfilled from '../src/assets/star-unfilled.svg';

function StampCard(props) {
  const totalStamps = 10;

  return (
    <div className='stamp-cards'>
      <p className='stamp-title'>{props.businessName}</p>
      <div className='stamps-container'>
        <div className='stamps'>
          {Array.from({ length: totalStamps }).map((_, index) => (
            <img
              src={props.stars > index ? starFilled : starUnfilled}
              alt='star icon svg'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StampCard;
