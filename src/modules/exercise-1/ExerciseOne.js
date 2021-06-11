import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './ExerciseOne.module.scss';
import Header from './header/Header';
import Card from './card/Card';

const HEADER_INFO = {
  desktopImgUrl: 'http://via.placeholder.com/1920x650',
  mobileImgUrl: 'http://via.placeholder.com/600x600',
  headline: 'Hello Developer!',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};

const CARD_ITEMS = [
  {
    imgUrl: 'http://via.placeholder.com/400x300',
    details: [
      'Lorem ipsum dolor sit amet, consectetur malesuada fames elit. Elementum non sapien quis.',
      'Dleifend arcu. Pellentesque senectus et netus et malesuada fames ac turpis egestas. ',
    ],
    siteUrl: '',
  },
  {
    imgUrl: 'http://via.placeholder.com/400x300',
    details: [
      'Aliquam dapibus hendrerit arcu, eget blandit arcu facilisis eu. Nullam hendrerit nunc nec justo convallis, vitae consectetur felis congue.',
    ],
    siteUrl: '',
  },
  {
    imgUrl: 'http://via.placeholder.com/400x300',
    details: [
      'Praesent maximus semper feugiat. Etiam nec mauris blandit. Sed ut justo a tellus finibus imperdiet. Mauris lacus arcu, faucibus non dignissim sit amet, facilisis sollicitudin orci.',
    ],
    siteUrl: '',
  },
];
export default function ExerciseOne() {
  return (
    <Grid container>
      <Header
        desktopImgUrl={HEADER_INFO.desktopImgUrl}
        mobileImgUrl={HEADER_INFO.mobileImgUrl}
        headline={HEADER_INFO.headline}
        tagline={HEADER_INFO.tagline}
      />
      <Grid item xs={12}>
        <Grid container justify="center" className={styles.cards}>
          {CARD_ITEMS.map((item, index) => {
            return (
              <Grid key={index} item>
                <Card
                  className={styles.spacing}
                  imgUrl={item.imgUrl}
                  details={item.details}
                  siteUrl={item.siteUrl}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
