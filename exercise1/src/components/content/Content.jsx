import React from 'react';
import { Card, Button } from 'antd';
import { cardItems } from './card.map';
import styles from './Content.module.scss';

const { Meta } = Card;

const Content = () => {
  return (
    <div className={styles['card-wrapper']}>
      {cardItems.map((item, index) => (
        <Card
          key={index}
          className={styles['card']}
          cover={<img alt="Card Image" src={ item.image } />}
        >
          <Meta description={ item.description } />
          <Button 
            type="default" 
            className={styles['button']}
          >
            { item.button }
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Content;
