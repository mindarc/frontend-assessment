import { useEffect, useState } from 'react';
import DesktopBanner from '../assets/images/desktopBanner.png';
import MobileBanner from '../assets/images/mobileBanner.png';

const HeroSection = () => {
    const [bannerImage, setBannerImage] = useState(DesktopBanner);

    useEffect(() => {
        const updateBannerImage = () => {
            if (window.innerWidth < 600) {
                setBannerImage(MobileBanner);
            } else {
                setBannerImage(DesktopBanner);
            }
        };

        updateBannerImage();
        window.addEventListener('resize', updateBannerImage);

        return () => {
            window.removeEventListener('resize', updateBannerImage);
        };
    }, []);

    return (  
    <>
        <section 
            className="relative h-[600px] md:h-[650px] flex items-center justify-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="text-center">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                    Hello Developer!
                </h1>
                <p className="text-white mt-4 text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </div>
        </section>
    </>
    );
}
 
export default HeroSection;