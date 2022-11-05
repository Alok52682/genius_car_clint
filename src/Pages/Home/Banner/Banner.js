import React from 'react';
import './BannerItem.css';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        id: 1,
    },
    {
        image: img2,
        id: 2,
    },
    {
        image: img3,
        id: 3,
    },
    {
        image: img4,
        id: 4,
    },
    {
        image: img5,
        id: 5,
    },
    {
        image: img6,
        id: 6,
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;