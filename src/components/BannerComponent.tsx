import { useState, useEffect } from "react";
import banner from "../assets/images/banner.png";
import bannerMobile from "../assets/images/mobile.png";

const BannerComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(("b" + "a" + +"a" + "a").toLowerCase());
  return (
    <section
      style={{
        backgroundImage: `url(${isMobile ? bannerMobile : banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
      className="banner d-flex justify-content-center align-self-center"
    >
      <div className="d-flex justify-content-center align-items-center flex-column align-self-center text-white">
        <h2 className="text-[64px] font-bold">Hello Developer!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </section>
  );
};

export default BannerComponent;
