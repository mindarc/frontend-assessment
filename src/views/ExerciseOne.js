import React from 'react';
import Grid from '@material-ui/core/Grid';
import Banner from '../components/Banner';
import ShowCard from '../components/Card';
import Btn from '../components/Btn';

const bannerInfo = {
    desktopImgUrl: 'http://via.placeholder.com/1920x650',
    mobileImgUrl: 'http://via.placeholder.com/600x600',
    title: 'Hello Developer!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
};

const cardItems = [
    {
        imgUrl: 'http://via.placeholder.com/400x300',
        details: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        ]
    },
    {
        imgUrl: 'http://via.placeholder.com/400x300',
        details: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ]
    },
    {
        imgUrl: 'http://via.placeholder.com/400x300',
        details: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        ]
    },
];
const ExerciseOne = () => {
    
    return (
        <Grid container>
            <Banner
                desktopImgUrl={bannerInfo.desktopImgUrl}
                mobileImgUrl={bannerInfo.mobileImgUrl}
                title={bannerInfo.title}
                description={bannerInfo.description}
            />
            <Grid item xs={12}>
                <Grid container justifyContent="center" className="exercise__one--body">

                    {cardItems.map((item, index) => {
                        return (
                            <Grid key={index} item>
                                <ShowCard
                                    imgUrl={item.imgUrl}
                                    details={item.details}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
            <Btn />
        </Grid>
        
    );
}
export default ExerciseOne;