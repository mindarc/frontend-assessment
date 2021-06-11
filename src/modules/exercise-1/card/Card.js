import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';
import Button from '../../../components/button/Button';

export default function Card({ imgUrl, details, siteUrl, className }) {
  const readMore = () => {
    window.location.href = siteUrl;
  };
  return (
    <div className={classNames(styles.cardWrap, className)}>
      <img src={imgUrl} />
      <div className={styles.detailWrap}>
        {details.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className={styles.btnWrap}>
        <Button label={'READ MORE'} onClick={readMore} />
      </div>
    </div>
  );
}
