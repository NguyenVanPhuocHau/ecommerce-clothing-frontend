import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from 'react-slick';
const cx = classNames.bind(styles);
export default function Home() {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        adaptiveHeight: true,
        
    };
    return (
        <div>
            <Slider {...settings}>
                        <div>
                            <img
                                src="https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp"
                                alt="img-house"
                                className={cx('thumbnail-slide')}
                            />
                        </div>
                        <div>
                            <img
                                src="https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp"
                                alt="img-house"
                                className={cx('thumbnail-slide')}
                            />
                        </div>
                        <div>
                            <img
                                src="https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp"
                                alt="img-house"
                                className={cx('thumbnail-slide')}
                            />
                        </div>
                        <div>
                            <img
                                src="https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        
                    </Slider>
        <div className={cx('wrapper')}>
            <div className={cx('bg-banner', 'grid')}>
                <div className={cx('home-banner-slide', 'grid')}>
                    
                </div>
            </div>
        </div>
        </div>
    );
}
