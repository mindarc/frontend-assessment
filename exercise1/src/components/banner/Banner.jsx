// Banner.jsx

import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import styles from './Banner.module.scss';

const { Text, Title } = Typography;

const title = "Hello Developer!";
const subTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

const desktopBannerUrl = "https://placehold.co/1920x650";
const mobileBannerUrl = "https://placehold.co/600x600";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bannerUrl = isMobile ? mobileBannerUrl : desktopBannerUrl;

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${bannerUrl})` }}>
      <div className={styles.overlay}>
            <div className={styles.text}>
              <Title level={1}>{title}</Title>
              <Text>{subTitle}</Text>
            </div>
      </div>
    </div>
  );
};

export default Banner;
