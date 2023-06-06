import React from 'react';
import Style from './ReuseableBookNowButton.module.css';

const ReuseableBookNowButton = () => {
  return (
    <div className={Style.reuseableBookNowButtonContainer}>
      <div className={Style.reuseableBookNowButtonBox}>
        <p className={Style.reuseableBookNowButtonText}>BOOK NOW</p>
      </div>
    </div>
  );
};

export default ReuseableBookNowButton;
