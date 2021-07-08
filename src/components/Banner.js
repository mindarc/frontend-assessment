import React from 'react';

const Banner = (props) => {
    return (
        <div className="banner">
            <img className="banner__desktop" alt="large banner" src={props.desktopImgUrl} />
            <img className="banner__mobile" alt="small banner" src={props.mobileImgUrl} />
            <div className="banner__text" >
                <h1 className="banner__title">{props.title}</h1>
                <p className="banner__content">{props.description}</p>
            </div>
        </div>
    );
}

export default Banner;