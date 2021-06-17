import React, { useEffect } from 'react'
import { useState } from 'react';

const Banner = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWindowWidth] = useState(0)
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    if (width <= 600) setIsMobile(true);
    else setIsMobile(false);
    
  }, [width])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    <div className="banner" style={{ backgroundImage: isMobile ? `url(${props.mobileImageUrl})` : `url(${props.desktopImageUrl})` }}>
      <div className="banner__wrapper" >
        <h1 className="banner__title">{props.title}</h1>
        <p className="banner__content">{props.description}</p>
      </div>
    </div>
  );
}

export default Banner;