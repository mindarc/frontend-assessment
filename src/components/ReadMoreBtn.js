import React from 'react';

const ReadMoreBtn = ({ label}) => {
  return (
    <div className="cardWrap__footer">
      <button className= "cardWrap__button">
        {label}
      </button>
    </div>
  );
}

export default ReadMoreBtn;