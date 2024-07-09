import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../assets/scss/banner.scss";

const Banner = () => {
  return (
    <>
      <div className="banner d-flex align-items-center position-relative">
        <div className="container position-relative z-2">
          <div className="banner__content text-center text-white">
            <h1 className="banner__content-title"> Hello Developer! </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                1000,
              ]}
              className="banner__content-subtitle"
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              deletionSpeed={5}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
