import React from 'react';
import ReadMoreBtn from './ReadMoreBtn';

const ShowCard = ({ imgUrl, details }) => {

    return (
        <div className="cardWrap">
            <div className="cardWrap__header">
                <img src={imgUrl} alt="Card Pic" />
            </div>
            <div className="cardWrap__content">
                {details.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    );
                })}
            </div>
            <ReadMoreBtn label={'READ MORE'} />
        </div>
    );
}
export default ShowCard;