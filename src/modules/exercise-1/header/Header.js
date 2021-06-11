import React from 'react';
import styles from './Header.module.scss';

export default function Header({
  desktopImgUrl,
  mobileImgUrl,
  headline,
  tagline,
}) {
  return (
    <div className={styles.headerWrap}>
      <img className={styles.desktop} src={desktopImgUrl} />
      <img className={styles.mobile} src={mobileImgUrl} />
      <div className={styles.textWrap}>
        <h1>{headline}</h1>
        <p>{tagline}</p>
      </div>
    </div>
  );
}
